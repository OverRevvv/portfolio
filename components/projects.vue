<script setup lang="ts">
const data = [
    {
        name: 'News Scrapper',
        url: 'https://newsscrapper.vercel.app/',
        code: 'https://github.com/OverRevvv/NewsScrapperApp',
        Image: '/images/projects/scrapper.gif',
        description: 'Scrap data from 3 target website and display them'
    },
    {
        name: 'Shopping App',
        url: 'https://shoekart-31xv.onrender.com/',
        code: 'https://github.com/OverRevvv/ShoppingApp',
        Image: '/images/projects/cart.gif',
        description: 'A basic Full-Stack app using MEVN Tech-Stack'
    },
]
</script>
<template>
    <div class="font-mono">
        <div class="text-center text-4xl sm:text-6xl dark:text-teal-300 font-medium my-16">Projects</div>
        <div class="mt-10 sm:flex">
            <div v-for="item in data" :key="item.url" class="blurblur brdr pt-6 project-card">
                    <a :href="item.code" target="_blank" rel="noopener noreferrer">
                        <img src="/images/socials/github.png" alt="code" class="max-h-10 w-auto mx-auto" />
                    </a>
                 <a :href="item.url" target="_blank" rel="noopener noreferrer">   
                <div class="block pt-4 ">
                    <img class="m-auto" :src="item.Image" :alt=item.name>
                </div>
                </a>
                <div class="text-xl sm:text-2xl font-semibold font-mono dark:text-pink-500">{{ item.name }}</div>
                    &nbsp;
                <div class="text-sm text-sky-300 sm:text-xl pt-1 ">{{ item.description }}</div>
            </div>
        </div>
        <div class="text-lg sm:text-xl p-4 text-center dark:text-gray-200 mt-4">Checkout
            <a href="https://github.com/OverRevvv" target="_blank" rel="noopener noreferrer"
                class="text-lg sm:text-xl font-normal underline underline-offset-2 dark:text-blue-200">
                Github</a> for more.
        </div>
    </div>
</template>

<style scoped >
.project-card {

    /* @apply  bg-[#15103088] text-center block sm:w-1/2 p-6 m-4 border border-gray-500 rounded-3xl; */
    @apply  bg-[#15103088] text-center block sm:w-1/2 p-6 m-4 rounded-3xl;
}
</style>