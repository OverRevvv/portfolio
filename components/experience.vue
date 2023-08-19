<script setup lang="ts">
const data = [
    {
        position: 'Participant',
        company: 'The Arcade-Google Cloud Part 1 and Part 2',
        url: 'https://go.qwiklabs.com/arcade',
        time: '15 October 2022 - 30 June 2023',
        points: [
            "Fundamentals of the event was same as Before",
            "Arcade was game like program where we had to collect badges by completing labs within a given time, and each badge had it's own niche of Google Cloud Platform"
        ],
        id: 1
    },
    {
        position: 'Participant',
        company: 'Google Cloud Facilitator Program',
        url: 'https://events.withgoogle.com/googlecloudready-facilitator-program/',
        time: '26 April 2022 - 25 June 2022',
        points: [
            "The Program introducted me to Cloud Computing, Data Management, Kubernetes, DevOps and More",
            "It was lab based program which had 4 tracks each track had 10 labs and 5 skill challenge labs",
        ],
        id: 2
    },
]

function cardPosition(itemId: number) {
    return itemId % 2 === 0 ? 'cardPRight' : 'cardPLeft';
}

function timePosition(itemId: number) {
    return itemId % 2 === 0 ? 'timePLeft' : 'timePRight';
}
</script>
<template>
    <div>
        <div v-motion-slide-visible-bottom class="text-4xl sm:text-6xl text-center text-teal-300 font-medium my-16">Experience</div>
        <div class="timeline-div">
            <div class="w-10 h-10  rounded-full translate-y-52 border-4 bg-[#17132b] border-[#17132b] p-1">
                <img src="/images/experience/gc.svg" alt="Arcade">
            </div>
            <div class="w-10 h-10 rounded-full translate-y-[40rem] border-4 bg-[#17132b] border-[#17132b] p-1">
                <img src="/images/experience/gc2.svg" alt="GoogleCloud">
            </div>
        </div>
        <div class="flex justify-center min-w-full" v-for="item in data" :key="item.id">
            <div v-motion-slide-visible-left :class="cardPosition(item.id)" class="flex justify-center w-full">
                <div $vanillaTilt data-tilt class="card brdr">
                    <div class="inner blurblur">
                        <div class="text-2xl font-semibold mb-1 sm:text-3xl text-pink-400">{{ item.position }}</div>
                        <a :href="item.url" target="_blank" rel="noopener noreferrer"
                            class="text-xl sm:text-2xl font-normal underline underline-offset-2 text-blue-300">{{
                                item.company
                            }}</a>
                        <div :class="timePosition(item.id)"
                            class=" my-2 font-sans text-sm sm:text-base font-bold text-violet-400 pb-1">{{ item.time }}</div>
                        <ul class="text-sm sm:text-lg font-normal mb-1 list-disc list-inside" v-for="point in item.points"
                            :key="point">
                            <li class="py-1">{{ point }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped >
.card {
    /* @apply bg-[#15103088] text-center block md:p-2 rounded-3xl text-white pt-6 mt-4 h-auto w-11/12 md:w-1/2 lg:w-[36%] lg:p-10 lg:m-4; */
    @apply bg-[#15103088] text-center block rounded-3xl text-white mt-4 h-auto w-11/12 md:w-1/2 lg:w-[36%] lg:m-4;
    transform-style: preserve-3d;
}
.inner{
    @apply w-full pt-6 md:p-2 lg:p-10;
}
.inner:hover {
    transform: translateZ(100px);
    transform: scale3d(50px);
}
.card img {
    width: 10px;
}

.timeline-div {
    @apply z-10 w-1 bg-[#17132b] sm:mx-auto sm:h-[57rem] lg:flex flex-col justify-start items-center mt-0 absolute left-1/2 transform -translate-x-1/2 hidden md:hidden;
}

.cardPRight {
    @apply sm:justify-end sm:pr-24;
}

.cardPLeft {
    @apply sm:justify-start sm:pl-24;
}

.timePLeft {
    @apply sm:transform md:-translate-x-0 lg:-translate-x-[31rem] lg:text-lg lg:translate-y-[5.2rem];
}

.timePRight {
    @apply sm:transform md:translate-x-0 lg:translate-x-[31rem] lg:translate-y-[2.8rem] sm:text-lg;
}</style>