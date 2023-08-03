<script lang="ts" setup>
let loading: any;
const socials = [
    {
        name: 'Email',
        url: "mailto:arnavbabu2002@gmail.com",
        icon: "/images/socials/mail.png",
        username: 'mail@overrevvv.dev'
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
    <div class="font-mono">
        <h3 class="text-4xl sm:text-6xl text-center dark:text-teal-300 font-medium my-8 sm:my-24">Contacts
        </h3>
        <div class="sm:mt-12  overflow-hidden w-full font-mono">
            <div class="card blurblur brdr">
                <p
                    class="headingTitle">
                    Get in touch</p>
                <form action="" class="mt-12 flex flex-col gap-8">
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Name</span>
                        <input type='text' name='name' placeholder="What's your good name?" class="inputBox" />
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your email</span>
                        <input type='email' name='email' placeholder="What's your web address?" class="inputBox" />
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Message</span>
                        <textarea rows={7} name='message' placeholder='What you want to say?' class="inputBox" />
                    </label>

                    <button type='submit' class="btn">
                        {{ loading ? "Sending..." : "Send" }}
                    </button>
                </form>
            </div>
        </div>
        <div class=" sm:mt-12  overflow-hidden w-full font-mono">
            <div class="blurblur brdr card">
                <p
                    class="headingTitle">
                    Socials</p>
                <div class="box" v-for="item in socials" :key="item.name">
                    <div class="smlbox">
                        <h1 class="sm:text-2xl text-pink-500">{{ item.name }}</h1>
                    </div>
                    <div class="smlbox">
                        <img :src="item.icon" class="h-8 sm:max-h-10 w-auto mx-auto " alt="icon">
                    </div>
                    <div class="smlbox">
                        <a :href="item.url"
                            class=" underline-offset-4 decoration-2 underline flex items-center sm:text-xl text-sky-300 justify-center"
                            target="_blank" rel="noopener noreferrer">
                            {{ item.username }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    @apply my-4 sm:my-0 sm:p-8 sm:w-3/5 mx-auto bg-[#15103088] text-center rounded-2xl;
}
.headingTitle{
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

th {
    @apply text-center;
}

td {
    @apply text-center;
}

.box {
    @apply text-white text-center font-bold mt-4 w-full px-10 rounded-3xl mx-auto flex items-center justify-between;
}

.smlbox {
    @apply w-1/3 text-center;
}</style>
