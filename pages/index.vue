<script setup lang="ts">
//grabbing cursor effect for 3D model
const isPressed = ref(false);
const handleMouseDown = ()=>{
    isPressed.value = true;
}
const handleMouseUp = ()=>{
    isPressed.value = false;
}
</script>
<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6 blur-0">
                <intro />
            </section>
            <section class="flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <div class="absolute bottom-64 z-40 w-full h-28 block sm:hidden blur-0"/>
                <div class="mouseOuter">
                    <div class="mouseBtn" />
                </div>
                <div @mousedown="handleMouseDown"
         @mouseup="handleMouseUp"
         :class="isPressed? 'cursor-grabbing': 'cursor-grab'"
                 class="absolute z-30 h-72 top-[26rem] w-full md:top-52 md:h-1/2 md:right-0  lg:h-full lg:top-12 lg:right-24">
                    <ClientOnly>
                        <Pc />
                    </ClientOnly>
                </div>
                <div class="h-72 blur-0 sm:blur-none"/>
                <div class="absolute -bottom-52 w-full h-72 block sm:hidden blur-0"/>
                <WorkIntro/>
            </section>
            <section class="flex relative sm:static justify-between sm:items-center flex-col sm:flex-row mt-6 max-w-full">
                <div class="absolute mx-auto top-10 w-full h-52 block sm:hidden blur-0"/>
                <div class="absolute mx-auto -bottom-20 w-full h-56 block sm:hidden blur-0"/>
                <Education class="mt-20 min-w-full" />
            </section>
            <section class="blur-0">
                <Experience class="mt-10" />
            </section>
            <section class="blur-0 relative sm:static">
                <div class="absolute mx-auto -top-20 w-full h-40 block sm:hidden blur-0"/>
                <Projects class="mt-10" />
            </section>
            <section class="blur-0 my-10 justify-center items-center relative sm:static">
                <div class="absolute mx-auto -top-20 w-full h-40 block sm:hidden blur-0"/>
                <div class="absolute mx-auto -bottom-12 w-full h-40 block sm:hidden blur-0"/>
                <Contact />
            </section>
        </div>
    </div>
</template>