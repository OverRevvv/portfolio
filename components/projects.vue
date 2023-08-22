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
    <div>
        <div v-motion-slide-visible-bottom class="heading my-16">Projects</div>
        <div v-motion-slide-visible-top class="mt-10 sm:flex">
            <div $VanillaTilt data-tilt v-for="item in data" :key="item.url" class="brdr font-mono card-color project-card">
                <div class="inner blurblur">
                    <a :href="item.code" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" src="/images/socials/github.png" alt="code" class="max-h-10 w-auto mx-auto hover:scale-125" />
                    </a>
                    <a :href="item.url" target="_blank" rel="noopener noreferrer">
                        <div class="block pt-4 ">
                            <img loading="lazy" class="m-auto rounded-2xl" :src="item.Image" :alt=item.name>
                        </div>
                    </a>
                    <div class="text-xl sm:text-2xl font-semibold font-mono text-pink-500">{{ item.name }}</div>
                    &nbsp;
                    <div class="text-sm text-sky-300 sm:text-xl pt-1 ">{{ item.description }}</div>
                </div>
            </div>
        </div>
        <div class="text-lg sm:text-xl p-4 text-center font-medium text-gray-200 mt-4">Checkout
            <a href="https://github.com/OverRevvv" target="_blank" rel="noopener noreferrer"
                class="text-lg sm:text-xl font-normal underline underline-offset-2 text-blue-200">
                Github</a> for more.
        </div>
    </div>
</template>

<style scoped >
.project-card {
    @apply text-center block sm:w-1/2 m-4 rounded-3xl;
    transform-style: preserve-3d;
}

.inner {
    @apply w-full p-6 pt-6;
}

.inner:hover {
    transform: translateZ(60px);
    transform: scale3d(50px);
}
</style>