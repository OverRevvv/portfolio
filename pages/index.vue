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
    <div class="flex flex-col justify-center items-center w-full overflow-hidden">
        <div class="w-full 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6 blur-0">
                <intro />
            </section>
            <section class="relative flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <div class="absolute bottom-64 z-40 w-full h-28 block sm:hidden blur-0"/>
                <div class="mouseOuter">
                    <div class="mouseBtn" />
                </div>
                <div @mousedown="handleMouseDown" @mouseup="handleMouseUp"
                     :class="isPressed? 'cursor-grabbing': 'cursor-grab'"
                    class="absolute z-30 h-72 top-0 w-full md:top-[-28rem] md:h-[200%] lg:h-[250%] lg:-top-96 lg:right-24"
                    >
                    <ClientOnly>
                        <LazyPc />
                    </ClientOnly>
                </div>
                <div class="h-72 blur-0 sm:blur-none"/>
                <div class="absolute -bottom-48 w-full h-72 block sm:hidden blur-0"/>
                <WorkIntro/>
            </section>
            <section class="flex relative sm:static justify-between sm:items-center flex-col sm:flex-row mt-6 max-w-full">
                <div class="absolute mx-auto top-10 w-full h-52 block sm:hidden blur-0"/>
                <div class="absolute mx-auto -bottom-20 w-full h-56 block sm:hidden blur-0"/>
                <LazyEducation class="mt-20 min-w-full" />
            </section>
            <section class="blur-0">
                <LazyExperience class="mt-10" />
            </section>
            <section class="blur-0 relative sm:static">
                <div class="absolute mx-auto -top-20 w-full h-40 block sm:hidden blur-0"/>
                <LazyProjects class="mt-10" />
            </section>
            <section class="blur-0 my-10 justify-center items-center relative sm:static">
                <div class="absolute mx-auto -top-20 w-full h-40 block sm:hidden blur-0"/>
                <div class="absolute mx-auto -bottom-12 w-full h-40 block sm:hidden blur-0"/>
                <LazyContact />
            </section>
        </div>
    </div>
</template>