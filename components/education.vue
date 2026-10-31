<script setup lang="ts">
import type gsap from 'gsap';

const { $gsap, $scrollTrigger: scrollTrigger } = useNuxtApp();
const gsapInstance = $gsap as typeof gsap;
const main = ref();
let ctx: gsap.Context;

onMounted(() => {
    ctx = gsapInstance.context(() => {
        gsapInstance.from(".target", {
            x: -700,
            y: -700,
            scrollTrigger: {
                trigger: ".target",
                start: '70% center',
                end: '200% center',
                scrub: true,
                markers: false,
            },
        });
        gsapInstance.fromTo(
            ".earthContainer",
            { x: 700, y: -700 },
            {
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: ".target",
                    start: "70% center",
                    end: "200% center",
                    scrub: true,
                    markers: false,
                },
            }
        );

        gsapInstance.fromTo(
            ".earthContainer",
            { x: 0, y: 0 },
            {
                x: 650,
                y: 1000,
                scrollTrigger: {
                    trigger: ".target",
                    start: "210% center",
                    end: "400% center",
                    scrub: true,
                    markers: false,
                },
            }
        );

        nextTick(() => {
            ScrollTrigger.refresh();
        });


    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});

const data = [
    {
        heading: 'Bachelor of Computer Applications (BCA)',
        college: 'Manipal University Jaipur (MUJ)',
        time: '2021 - 2024',
    },
    {
        heading: 'Masters of Computer Applications (MCA)',
        college: 'Manipal University Jaipur (MUJ)',
        time: '2025 - 2027',
    }
]

//grabbing cursor effect for 3D model
const isPressed = ref(false);
const handleMouseDown = () => {
    isPressed.value = true;
}
const handleMouseUp = () => {
    isPressed.value = false;
}

</script>

<template>
    <div class="overflow-hidden relative sm:static" ref="main">
        <div class="heading mb-8">Education</div>
        <div @mousedown="handleMouseDown" @mouseup="handleMouseUp"
            :class="isPressed ? 'cursor-grabbing' : 'cursor-grab'" class="earthContainer">
            <ClientOnly>
                <LazyEarth />
            </ClientOnly>
        </div>
        <div class="flex sm:w-1/2 flex-col md:ml-0 lg:ml-32 target">
            <div $VanillaTilt data-tilt v-for="(item, index) in data" :key="item.heading"
                class="sm:mt-4 card card-color brdr">
                <div class="inner blurblur">
                    <div class="text-xl sm:text-2xl pb-2 font-semibold mb-1 text-pink-500">{{ item.heading }}</div>
                    <div class="text-lg text-sky-300 sm:text-xl pb-2 font-normal mb-1">{{ item.college }}</div>
                    <div class="text-sm sm:text-base font-light text-violet-500">{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    @apply text-center block sm:w-96 m-4 rounded-3xl;
    transform-style: preserve-3d;
}

.inner {
    @apply w-full p-6;
}

.inner:hover {
    transform: translateZ(60px);
    transform: scale3d(50px);
}

.earthContainer {
    @apply absolute mx-auto sm:mx-0 w-11/12 h-full md:h-[80%] md:w-full md:-bottom-[70%] md:left-0 lg:h-[56em] lg:w-full lg:top-[38rem] lg:left-80;
}
</style>