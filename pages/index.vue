<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6">
                <intro />
            </section>
            <section class="flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <div class="mouseOuter">
                    <div class="mouseBtn" />
                </div>
                <!-- <div class="absolute z-30 sm:h-full h-72 w-full top-[26rem]  sm:top-12 sm:right-24"> -->
                <div class="absolute z-30 h-72 top-[26rem] w-full md:top-52 md:h-1/2 md:right-0  lg:h-full lg:top-12 lg:right-24">
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