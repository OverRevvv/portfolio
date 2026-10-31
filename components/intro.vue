<script lang="ts" setup>
// Local typewriter (replaces third-party readme-typing-svg)
const words = ["Arnav", "OverRevvv"];
const text = ref("");
let timer: ReturnType<typeof setTimeout> | undefined;
let w = 0, i = 0, deleting = false;

function tick() {
    const word = words[w];
    text.value = word.slice(0, i);
    let delay = deleting ? 70 : 120;
    if (!deleting && i === word.length) { deleting = true; delay = 1500; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 400; }
    else i += deleting ? -1 : 1;
    timer = setTimeout(tick, delay);
}

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { text.value = words[0]; return; }
    tick();
});
onUnmounted(() => clearTimeout(timer));
</script>

<template>
    <div class="container">
        <div class="content-box">
            <div class="mb-2">
                <div class="text-4xl md:mb-64 lg:mb-0 sm:ml-12 sm:text-5xl">
                    Hello,I am 
                    <span class="typed text-fuchsia-600 inline-block min-w-[9ch]">{{ text }}</span>
                </div>
            </div>
            
        </div>
        <div class="relative">
        <div class="absolute md:static lg:absolute inset-0 bg-gradient-to-r blur-sm from-[#05abcd] via-[#6665cd] to-[#af1db7] z-10 rounded-full h-52 w-52 md:h-64 md:w-64"/>
        <img loading="lazy" src="/images/pfp.jpg" alt="pfp" class="pfp relative md:-translate-y-64 lg:translate-y-0" />
        </div>
    </div>
</template>

<style scoped>
.typed::after { content: "|"; margin-left: 2px; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }

.container {
    @apply z-10 flex items-center justify-between sm:flex-row flex-col-reverse font-mono;
}

.content-box {
    @apply pt-6 text-center sm:text-left;
}

.pfp {
    /* @apply rounded-full h-52 w-52 z-30 md:h-64 md:w-64 border-[#490966] border-4; */
    @apply rounded-full h-52 w-52 z-30 md:h-64 md:w-64 border-4 border-transparent;
}

</style>