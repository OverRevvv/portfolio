<script setup lang="ts">
const data = [
    {
        heading: 'Bachelor of Computer Applications (BCA)',
        college: 'Manipal University Jaipur (MUJ)',
        time: '2021 - 2024',
    },
    {
        heading: 'Techie',
        college: 'Learning and exploring via Internet',
        time: '2021 - present',
    }
]
</script>

<template>
    <div class="font-mono  overflow-hidden">
        <div class="text-4xl sm:text-6xl text-center text-teal-300 font-medium mb-8">Education</div>
        <!-- <Horse class=" absolute sm:ml-[100vh] mt-20" /> -->
        <div class="earthContainer">
            <ClientOnly>
                <Earth />
            </ClientOnly>
        </div>
        <div class="flex flex-col md:ml-0 lg:ml-32">
            <div v-for="(item, index) in data" :key="item.heading" class="sm:mt-4 blurblur card brdr">
                <div class="text-xl sm:text-2xl pb-2 font-semibold mb-1 text-pink-500">{{ item.heading }}</div>
                <div class="text-lg text-sky-300 sm:text-xl pb-2 font-normal mb-1">{{ item.college }}</div>
                <div class="text-sm sm:text-base font-light text-violet-500">{{ item.time }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    /* @apply backdrop-blur-sm bg-[#15103088] text-center block sm:w-96 p-6 m-4 rounded-3xl shadow ; */
    @apply bg-[#15103088] text-center block sm:w-96 p-6 m-4 rounded-3xl;
}
.earthContainer{
    @apply absolute w-11/12 h-1/2 md:h-[80%] md:w-full md:-bottom-[70%] md:left-0 lg:h-full lg:w-full lg:top-[45rem] lg:left-80;
}
</style>