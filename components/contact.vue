<script lang="ts" setup>
// Web3Forms access keys are public by design (they only allow sending to your own inbox)
const ACCESS_KEY = "b42c576f-9eb4-4a36-94ce-bf03dd4ef7b4";
const ENDPOINT = "https://api.web3forms.com/submit";

// ---- limits / anti-spam config ----
const LIMITS = { nameMin: 2, nameMax: 60, emailMax: 254, msgMin: 10, msgMax: 1000, maxLinks: 2 };
const MIN_FILL_MS = 3000;          // humans take longer than 3s to fill a form
const COOLDOWN_MS = 60 * 1000;     // min gap between two sends
const MAX_PER_HOUR = 3;            // max sends per browser per hour
const TIMEOUT_MS = 15000;          // abort a hanging request
const STORE_KEY = "contact_sends";

const form = reactive({ name: "", email: "", message: "", website: "", botcheck: false });
const errors = reactive<Record<string, string>>({ name: "", email: "", message: "" });
const touched = reactive<Record<string, boolean>>({ name: false, email: false, message: false });
const loading = ref(false);
const sent = ref(false);
const sentTo = reactive({ name: "", email: "" });
const mountedAt = ref(0);
// persistent in-form error (kept until the next attempt) so the user can retry
const submitError = reactive({ show: false, title: "", text: "", retryable: true });
const FALLBACK_EMAIL = "arnavbabu2002@gmail.com";

// ---- toast notification ----
type ToastType = "success" | "error" | "info";
const toast = reactive({ show: false, type: "info" as ToastType, title: "", text: "" });
let toastTimer: ReturnType<typeof setTimeout> | undefined;
function notify(type: ToastType, title: string, text = "") {
    clearTimeout(toastTimer);
    Object.assign(toast, { show: true, type, title, text });
    toastTimer = setTimeout(() => (toast.show = false), 5000);
}
function closeToast() {
    clearTimeout(toastTimer);
    toast.show = false;
}

// ---- validation ----
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,24}$/;
const LINK_RE = /(https?:\/\/|www\.)/gi;

function validateField(field: "name" | "email" | "message"): string {
    const v = form[field].trim();
    if (field === "name") {
        if (!v) return "Please tell me your name";
        if (v.length < LIMITS.nameMin) return "Name is too short";
        if (v.length > LIMITS.nameMax) return `Name must be under ${LIMITS.nameMax} characters`;
        if (/[<>]/.test(v) || LINK_RE.test(v)) return "Name contains invalid characters";
        LINK_RE.lastIndex = 0;
    }
    if (field === "email") {
        if (!v) return "Please enter your email";
        if (v.length > LIMITS.emailMax || !EMAIL_RE.test(v) || v.includes("..")) return "Enter a valid email like name@example.com";
    }
    if (field === "message") {
        if (!v) return "Please write a message";
        if (v.length < LIMITS.msgMin) return `Message needs at least ${LIMITS.msgMin} characters`;
        if (v.length > LIMITS.msgMax) return `Message must be under ${LIMITS.msgMax} characters`;
        if ((v.match(LINK_RE) || []).length > LIMITS.maxLinks) return `Please include at most ${LIMITS.maxLinks} links`;
    }
    return "";
}
function onBlur(field: "name" | "email" | "message") {
    touched[field] = true;
    errors[field] = validateField(field);
}
function onInput(field: "name" | "email" | "message") {
    if (touched[field]) errors[field] = validateField(field);
}

// ---- rate limiting (per browser) ----
function readSends(): number[] {
    try {
        const arr = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
        return Array.isArray(arr) ? arr.filter((t) => typeof t === "number" && Date.now() - t < 3600_000) : [];
    } catch { return []; }
}
function writeSends(arr: number[]) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(arr)); } catch { /* storage blocked */ }
}
function rateLimitMessage(): string {
    const sends = readSends();
    const last = sends[sends.length - 1];
    if (last && Date.now() - last < COOLDOWN_MS) {
        return `Please wait ${Math.ceil((COOLDOWN_MS - (Date.now() - last)) / 1000)}s before sending another message`;
    }
    if (sends.length >= MAX_PER_HOUR) return "You've reached the hourly message limit. Please try again later";
    return "";
}

onMounted(() => { mountedAt.value = Date.now(); });
onBeforeUnmount(() => clearTimeout(toastTimer));

async function onSubmit() {
    if (loading.value) return;

    // 1. validate every field
    (["name", "email", "message"] as const).forEach((f) => { touched[f] = true; errors[f] = validateField(f); });
    const firstBad = (["name", "email", "message"] as const).find((f) => errors[f]);
    if (firstBad) {
        notify("error", "Check the form", errors[firstBad]);
        (document.querySelector(`[name="${firstBad}"]`) as HTMLElement | null)?.focus();
        return;
    }

    // 2. bot traps: honeypots + too-fast submission -> pretend success, send nothing
    const tooFast = Date.now() - mountedAt.value < MIN_FILL_MS;
    if (form.website || form.botcheck || tooFast) {
        if (tooFast && !form.website && !form.botcheck) {
            notify("info", "Slow down a bit", "Please take a moment and try again");
            return;
        }
        sentTo.name = form.name.trim(); sentTo.email = form.email.trim();
        sent.value = true;
        return;
    }

    // 3. rate limit + connectivity
    const limited = rateLimitMessage();
    if (limited) { notify("error", "Too many requests", limited); return; }
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
        notify("error", "You're offline", "Check your connection and try again");
        return;
    }

    // 4. send (one automatic retry for transient failures)
    submitError.show = false;
    loading.value = true;
    try {
        let result = await sendOnce();
        if (!result.ok && result.transient) {
            await new Promise((r) => setTimeout(r, 1200));
            result = await sendOnce();
        }
        if (result.ok) {
            writeSends([...readSends(), Date.now()]);
            sentTo.name = form.name.trim(); sentTo.email = form.email.trim();
            sent.value = true;
            Object.assign(form, { name: "", email: "", message: "", website: "", botcheck: false });
            (["name", "email", "message"] as const).forEach((f) => { touched[f] = false; errors[f] = ""; });
            notify("success", "Message sent", "Thanks for reaching out!");
        } else {
            fail(result.title, result.text, result.retryable);
        }
    } catch (err) {
        // anything unexpected: never leave the button stuck or the user without feedback
        console.error("[contact] unexpected error", err);
        fail("Something went wrong", "An unexpected error occurred. Your message was not sent.", true);
    } finally {
        loading.value = false;
    }
}

type SendResult =
    | { ok: true }
    | { ok: false; title: string; text: string; retryable: boolean; transient: boolean };

async function sendOnce(): Promise<SendResult> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const body = new FormData();
        body.append("access_key", ACCESS_KEY);
        body.append("subject", "New message from portfolio");
        body.append("from_name", "Portfolio contact form");
        body.append("name", form.name.trim());
        body.append("email", form.email.trim());
        body.append("replyto", form.email.trim());
        body.append("message", form.message.trim());
        body.append("botcheck", "");

        const res = await fetch(ENDPOINT, { method: "POST", body, signal: controller.signal, headers: { Accept: "application/json" } });

        let data: any = null;
        try { data = await res.json(); } catch { /* non-JSON body (proxy/HTML error page) */ }

        if (res.ok && data?.success) return { ok: true };

        const serverMsg = typeof data?.message === "string" ? data.message : "";
        if (res.status === 429)
            return { ok: false, title: "Too many requests", text: "The form service is busy. Please try again in a few minutes.", retryable: true, transient: false };
        if (res.status === 400 || res.status === 422)
            return { ok: false, title: "Message rejected", text: serverMsg || "The form service couldn't accept this message. Please check your details.", retryable: true, transient: false };
        if (res.status === 401 || res.status === 403)
            return { ok: false, title: "Form is unavailable", text: "The contact form isn't configured correctly right now. Please email me directly instead.", retryable: false, transient: false };
        if (res.status >= 500)
            return { ok: false, title: "Service error", text: "The form service is having trouble. Please try again shortly.", retryable: true, transient: true };
        if (!data)
            return { ok: false, title: "Unexpected response", text: "The server sent something unreadable. Please try again.", retryable: true, transient: true };
        return { ok: false, title: "Couldn't send message", text: serverMsg || "Something went wrong. Please try again.", retryable: true, transient: false };
    } catch (err: any) {
        if (err?.name === "AbortError")
            return { ok: false, title: "Request timed out", text: "The server took too long to respond. Please try again.", retryable: true, transient: true };
        if (typeof navigator !== "undefined" && navigator.onLine === false)
            return { ok: false, title: "You're offline", text: "Check your internet connection and try again.", retryable: true, transient: false };
        return { ok: false, title: "Network error", text: "Couldn't reach the server. It may be blocked by an extension or your connection.", retryable: true, transient: true };
    } finally {
        clearTimeout(timer);
    }
}

function fail(title: string, text: string, retryable: boolean) {
    Object.assign(submitError, { show: true, title, text, retryable });
    notify("error", title, text);
    nextTick(() => document.querySelector(".errBanner")?.scrollIntoView({ block: "center", behavior: "smooth" }));
}

function dismissError() {
    submitError.show = false;
}

function sendAnother() {
    sent.value = false;
    mountedAt.value = Date.now();
}
const socials = [
    {
        name: 'Email',
        url: "mailto:arnavbabu2002@gmail.com",
        icon: "/images/socials/mail.png",
        username: 'mail@overrevvv'
    },
    {
        name: 'Twitter',
        url: "https://twitter.com/overrevvv",
        icon: "/images/socials/twitter.png",
        username: 'OverRevvv'
    },
    {
        name: 'Github',
        url: "https://github.com/OverRevvv",
        icon: "/images/socials/github.png",
        username: 'OverRevvv'
    },
    {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/overrevvv",
        icon: "/images/socials/linkedin.png",
        username: 'OverRevvv'
    },
    {
        name: 'Discord',
        url: "https://discordid.netlify.app/?id=927081646602219540",
        icon: "/images/socials/discord.png",
        username: 'OverRevvv'
    }
]
</script>
<template>
    <div>
        <ClientOnly>
            <Teleport to="body">
                <Transition name="toast">
                    <div v-if="toast.show" class="toastWrap" role="status" aria-live="polite">
                        <div class="toast" :class="'toast-' + toast.type">
                            <span class="toastIcon" aria-hidden="true">
                                <svg v-if="toast.type === 'success'" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                                <svg v-else-if="toast.type === 'error'" viewBox="0 0 24 24"><path d="M12 7v6M12 17h.01" /></svg>
                                <svg v-else viewBox="0 0 24 24"><path d="M12 11v6M12 7h.01" /></svg>
                            </span>
                            <div class="toastBody">
                                <p class="toastTitle">{{ toast.title }}</p>
                                <p v-if="toast.text" class="toastText">{{ toast.text }}</p>
                            </div>
                            <button type="button" class="toastClose" aria-label="Dismiss notification" @click="closeToast">&times;</button>
                            <span class="toastBar" :key="toast.title + toast.text" />
                        </div>
                    </div>
                </Transition>
            </Teleport>
        </ClientOnly>
        <h3 v-motion-slide-visible-top class="heading my-8 sm:my-24">Contacts
        </h3>
        <div v-motion-slide-visible-bottom class="sm:mt-12 w-full">
            <div class="bg-[#15103088] card blurblur brdr">
                <p class="headingTitle">
                    Get in touch</p>
                <Transition name="swap" mode="out-in">
                <div v-if="sent" key="done" class="success" role="status">
                    <svg class="check" viewBox="0 0 52 52" aria-hidden="true">
                        <circle class="check-circle" cx="26" cy="26" r="24" fill="none" />
                        <path class="check-mark" fill="none" d="M14 27l8 8 16-17" />
                    </svg>
                    <h4 class="text-teal-300 text-2xl sm:text-3xl font-medium mt-6">Message sent!</h4>
                    <p class="text-white mt-4">Thanks <span class="text-pink-500 font-semibold break-words">{{ sentTo.name }}</span>, I'll get back to you at</p>
                    <p class="text-sky-300 break-all">{{ sentTo.email }}</p>
                    <button type="button" class="btn mt-8" @click="sendAnother">Send another</button>
                </div>
                <form v-else key="form" novalidate @submit.prevent="onSubmit" class="mt-12 flex flex-col gap-8" aria-label="Contact form">
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Name</span>
                        <input v-model="form.name" type='text' name='name' required autocomplete="name"
                            :maxlength="LIMITS.nameMax" placeholder="What's your good name?" class="inputBox"
                            :class="{ inputErr: errors.name }" :aria-invalid="!!errors.name"
                            @blur="onBlur('name')" @input="onInput('name')" />
                        <span v-if="errors.name" class="fieldErr" role="alert">{{ errors.name }}</span>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your email</span>
                        <input v-model="form.email" type='email' name='email' required autocomplete="email" inputmode="email"
                            :maxlength="LIMITS.emailMax" placeholder="What's your web address?" class="inputBox"
                            :class="{ inputErr: errors.email }" :aria-invalid="!!errors.email"
                            @blur="onBlur('email')" @input="onInput('email')" />
                        <span v-if="errors.email" class="fieldErr" role="alert">{{ errors.email }}</span>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Message</span>
                        <textarea v-model="form.message" rows="7" name='message' required
                            :maxlength="LIMITS.msgMax" placeholder='What you want to say?' class="inputBox"
                            :class="{ inputErr: errors.message }" :aria-invalid="!!errors.message"
                            @blur="onBlur('message')" @input="onInput('message')" />
                        <span class="counter" :class="{ 'text-pink-500': form.message.length > LIMITS.msgMax - 50 }">
                            {{ form.message.length }}/{{ LIMITS.msgMax }}</span>
                        <span v-if="errors.message" class="fieldErr" role="alert">{{ errors.message }}</span>
                    </label>

                    <div v-if="submitError.show" class="errBanner" role="alert">
                        <p class="errTitle">{{ submitError.title }}</p>
                        <p class="errText">{{ submitError.text }}</p>
                        <p class="errText">Your message is still here. You can also email me at
                            <a :href="`mailto:${FALLBACK_EMAIL}`" class="underline text-sky-300">{{ FALLBACK_EMAIL }}</a>.</p>
                        <div class="errActions">
                            <button v-if="submitError.retryable" type="submit" class="errBtn" :disabled="loading">Try again</button>
                            <button type="button" class="errBtn errBtnGhost" @click="dismissError">Dismiss</button>
                        </div>
                    </div>

                    <!-- honeypots: invisible to people, bots fill them -->
                    <div class="hp" aria-hidden="true">
                        <label>Website <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" /></label>
                        <input v-model="form.botcheck" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" />
                    </div>

                    <button type='submit' class="btn" :disabled="loading" :aria-busy="loading">
                        {{ loading ? "Sending..." : "Send" }}
                    </button>
                </form>
                </Transition>
            </div>
        </div>
        <div v-motion-slide-visible-bottom class=" sm:mt-12  w-full font-mono">
            <div $VanillaTilt data-tilt class="brdr card-color card">
                <div class="inner blurblur">
                    <p class="headingTitle">
                        Socials</p>
                    <div class="box" v-for="item in socials" :key="item.name">
                        <div class="smlbox">
                            <h1 class="sm:text-2xl text-pink-500">{{ item.name }}</h1>
                        </div>
                        <div class="smlbox">
                            <a :href="item.url"
                                class=" underline-offset-4 decoration-2 underline flex items-center sm:text-xl text-sky-300 justify-center"
                                target="_blank" rel="noopener noreferrer">
                                <img loading="lazy" :src="item.icon" class="h-8 sm:max-h-10 w-auto mx-auto hover:border-b-2 hover:border-sky-300" alt="icon">
                            </a>
                        </div>
                        <div class="smlbox">
                            <a :href="item.url"
                                class=" underline-offset-4 decoration-2 underline flex items-center sm:text-xl text-sky-300 justify-center hover:decoration-pink-500"
                                target="_blank" rel="noopener noreferrer">
                                {{ item.username }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    @apply my-4 sm:my-0 lg:w-3/5 mx-auto text-center rounded-2xl md:w-11/12;
    transform-style: preserve-3d;
}
.inner {
    @apply w-full sm:p-8;
}

.inner:hover {
    transform: translateZ(80px);
    transform: scale3d(50px);
}
.headingTitle {
    @apply sm:text-[18px] text-[14px] text-center text-violet-500 uppercase tracking-wider font-sans font-bold sm:m-0 mt-4;
}

.inputBox {
    @apply bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium w-[90%] mx-auto;
}

.btn {
    @apply bg-[#151030] mb-2 py-3 px-8 mx-auto rounded-xl outline-none w-2/5 text-white font-bold shadow-md shadow-[#050816];
}

form ::placeholder {
    text-align: center;
}

input {
    text-align: center;
}

.box {
    @apply text-white text-center font-bold mt-4 w-full px-10 rounded-3xl mx-auto flex items-center justify-between;
}

.smlbox {
    @apply w-1/3 text-center;
}
.btn:disabled { @apply opacity-60 cursor-not-allowed; }
.inputErr { @apply ring-1 ring-pink-500; }
.fieldErr { @apply text-pink-500 text-sm mt-2 text-center; }
.counter { @apply text-xs text-[#aaa6c3] mt-2 text-right w-[90%] mx-auto; }
.errBanner { @apply w-[90%] mx-auto rounded-xl p-4 text-center bg-[#15103088] border border-pink-500; }
.errTitle { @apply text-pink-500 font-semibold; }
.errText { @apply text-sm text-[#aaa6c3] mt-1 break-words; }
.errActions { @apply flex justify-center gap-3 mt-3; }
.errBtn { @apply bg-[#151030] text-white font-medium text-sm py-2 px-5 rounded-lg border border-pink-500 shadow-md shadow-[#050816]; }
.errBtn:disabled { @apply opacity-60 cursor-not-allowed; }
.errBtnGhost { @apply border-transparent text-[#aaa6c3]; }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; opacity: 0; }

/* success state */
.success { @apply flex flex-col items-center text-center px-4 py-12 sm:py-16; }
.check { width: 84px; height: 84px; }
.check-circle { stroke: #5eead4; stroke-width: 2.5; stroke-dasharray: 151; stroke-dashoffset: 151; animation: draw .7s ease forwards; }
.check-mark { stroke: #5eead4; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 40; stroke-dashoffset: 40; animation: draw .4s .55s ease forwards; }
@keyframes draw { to { stroke-dashoffset: 0; } }
.swap-enter-active, .swap-leave-active { transition: opacity .25s ease, transform .25s ease; }
.swap-enter-from, .swap-leave-to { opacity: 0; transform: translateY(10px); }

/* toast */
.toastWrap { position: fixed; top: 4.5rem; left: 0; right: 0; z-index: 9999; display: flex; justify-content: center; padding: 0 1rem; pointer-events: none; }
.toast { position: relative; overflow: hidden; pointer-events: auto; display: flex; align-items: flex-start; gap: .75rem; width: 100%; max-width: 24rem;
  padding: .85rem 1rem; border-radius: 1rem; background: #151030f2; backdrop-filter: blur(12px); color: #fff; font-family: 'Kanit', sans-serif;
  border: 1px solid; border-color: #2563eb #2563eb #db2777 #db2777; box-shadow: 0 10px 30px #050816cc; }
.toastIcon { flex: none; width: 1.75rem; height: 1.75rem; border-radius: 9999px; display: grid; place-items: center; }
.toastIcon svg { width: 1.1rem; height: 1.1rem; fill: none; stroke: #050816; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.toast-success .toastIcon { background: #5eead4; }
.toast-error .toastIcon { background: #ec4899; }
.toast-info .toastIcon { background: #7dd3fc; }
.toastBody { flex: 1; min-width: 0; text-align: left; }
.toastTitle { font-weight: 600; line-height: 1.3; }
.toast-success .toastTitle { color: #5eead4; }
.toast-error .toastTitle { color: #ec4899; }
.toast-info .toastTitle { color: #7dd3fc; }
.toastText { font-size: .875rem; color: #aaa6c3; margin-top: .15rem; word-break: break-word; }
.toastClose { flex: none; color: #aaa6c3; font-size: 1.4rem; line-height: 1; padding: 0 .25rem; background: none; border: 0; cursor: pointer; }
.toastClose:hover { color: #fff; }
.toastBar { position: absolute; left: 0; bottom: 0; height: 3px; width: 100%; transform-origin: left; animation: bar 5s linear forwards;
  background-image: linear-gradient(90deg, #6665cd, #af1db7); }
@keyframes bar { to { transform: scaleX(0); } }
.toast-enter-active, .toast-leave-active { transition: opacity .3s ease, transform .3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-14px); }
@media (prefers-reduced-motion: reduce) { .toastBar, .check-circle, .check-mark { animation-duration: 0.01s; } }
</style>
