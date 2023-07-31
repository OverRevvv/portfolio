<template>
    <div
        class="flex justify-center bg-[#15103031] sticky top-0 z-40 bg-opacity-40 backdrop-filter backdrop-saturate-150 backdrop-blur-xl firefox:bg-opacity-100">
        <div class="w-full 2xl:w-10/12 2xl:max-w-screen-2xl mx-4">
            <div class="flex justify-between items-center py-3 ">
                <!-- <a href="https://drive.google.com/file/d/1OiGQC0s-88eSG6syx-8_HXRVjk49691k/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer"
                    class="text-2xl text-center font-mono md:text-3xl dark:text-transparent sm:mr-52 md:mr-60 lg:mr-80">Resume</a> -->
                    <img src="logo.svg" alt="logo" class="absolute h-10  sm:h-12 sm:mr-52 md:ml-12 lg:ml-20">
                    <div class="h-8 sm:mr-52 md:mr-60 lg:ml-20"/>
                <ul class="flex">
                    <li v-for="item in headerItems" :key="item.name">
                        <a :href="item.url" class="flex items-center justify-center" target="_blank"
                            rel="noopener noreferrer">
                            <img :src="cookie === 'dark' ? item.darkIcon : item.lightIcon"
                                class="max-h-6 w-auto mr-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const cookie = useCookie('theme', { default: () => 'dark' });
const headerItems = [
    {
        name: 'Github',
        url: "https://github.com/OverRevvv",
        darkIcon: "/images/social/github/github-dark.png",
        lightIcon: "/images/social/github/github-light.png"
    },
    {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/overrevvv",
        darkIcon: "/images/social/linkedin/linkedin.png",
        lightIcon: "/images/social/linkedin/linkedin.png"
    },
    {
        name: 'Twitter',
        url: "https://twitter.com/overrevvv",
        darkIcon: "/images/social/twitter/twitter-dark.png",
        lightIcon: "/images/social/twitter/twitter-light.png"
    }
];

</script>