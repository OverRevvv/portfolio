<script setup lang="ts">
const data = [
    {
        position: 'Participant',
        company: 'The Arcade-Google Cloud Part 1 and Part 2',
        url: 'https://go.qwiklabs.com/arcade',
        time: '15 October 2022 - 31 June 2023',
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

function  cardPosition(itemId:number) {
    return itemId % 2 === 0 ? 'cardPRight' : 'cardPLeft';
  }

function  timePosition(itemId:number) {
    return itemId % 2 === 0 ? 'timePLeft' : 'timePRight';
  }
</script>
<template>
    <div class="font-mono">
        <div class="text-4xl sm:text-6xl text-center text-teal-300 font-medium my-16">Experience</div>
            <div class="timeline-div">
                <div  class="w-10 h-10  rounded-full translate-y-52 border-4 bg-[#17132b] border-[#17132b] p-1" >
                    <img src="/images/experience/gc.svg" alt="Arcade">
                </div>
                <div class="w-10 h-10 rounded-full translate-y-[40rem] border-4 bg-[#17132b] border-[#17132b] p-1" >
                    <img src="/images/experience/gc2.svg" alt="GoogleCloud">
                    </div>
            </div>
        <div class="flex flex-col justify-center items-center min-w-full ">
            <div v-for="item in data" :class="cardPosition(item.id)" :key="item.id" class=" card">
                <div class="text-2xl mb-1 sm:text-3xl font-medium text-purple-200">{{ item.position }}</div>
                <a :href="item.url" target="_blank" rel="noopener noreferrer"
                    class="text-xl sm:text-2xl font-normal underline underline-offset-2 text-blue-200">{{
                        item.company
                    }}</a>
                <div :class="timePosition(item.id)" class=" my-2 font-sans text-sm sm:text-base font-bold text-gray-400 pb-1">{{ item.time }}</div>
                <ul class="text-sm sm:text-lg font-normal mb-1 list-disc list-inside" v-for="point in item.points"
                    :key="point">
                    <li class="py-1">{{ point }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped >
.card {
    @apply backdrop-blur-sm bg-[#15103088] text-center block sm:w-1/3 sm:p-10 sm:m-4 border border-gray-500 rounded-3xl shadow text-gray-200 pt-6 mt-4 h-auto w-11/12;
}
.card img{
    width: 10px;
}
.timeline-div{
    @apply z-10 w-1 bg-[#17132b] sm:mx-auto sm:h-[60rem] sm:flex flex-col justify-start items-center mt-0 absolute left-1/2  transform -translate-x-1/2 hidden;
}
.cardPRight{
    @apply sm:transform sm:translate-x-3/4;
}
.cardPLeft{
    @apply sm:transform sm:-translate-x-3/4;
}
.timePLeft{
    @apply sm:text-white sm:transform sm:-translate-x-[31rem] sm:text-lg sm:translate-y-[2rem];
}
.timePRight{
    @apply sm:text-white  sm:transform sm:translate-x-[31rem] sm:translate-y-[2.8rem] sm:text-lg;
}
</style>