<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6">
                <intro />
            </section>
            <section class="flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <div
                    class="absolute top-96 translate-x-24 z-10 w-[35px] h-[64px] rounded-3xl border-4 border-[#454b4e] flex justify-center items-start p-2">
                    <div class="mouseBtn w-3 h-3 rounded-full bg-[#3c3954] mb-1" />
                </div>
                <div class="absolute z-30 sm:h-full h-72 w-full top-96  sm:top-12 sm:right-24">
                    <Pc />
                </div>
                <div class="h-64" />
                <WorkIntro />
            </section>
            <section class="flex justify-between sm:items-center flex-col sm:flex-row mt-6 max-w-full">
                <Education class="mt-20 min-w-full" />
            </section>
            <section>
                <Experience class="mt-10" />
            </section>
            <section>
                <Projects class="mt-10" />
                <!-- <CoffeeMug class="h-96"/> -->
            </section>
            <section class="my-10 justify-center items-center">
                <Contact />
            </section>
        </div>
    </div>
</template>

<script setup>


</script>