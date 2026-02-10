<script setup>
const showWelcomeScreen = ref(true);

function welcomeScreen() {
    setTimeout(() => {
        showWelcomeScreen.value = false;
    }, 2000);
}

const options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
}

welcomeScreen();
</script>

<template>
    <Lenis :options="options" root>
        <div class="bg-[#050816] overflow-hidden">
            <ClientOnly class="overflow-hidden">
                <StarField />
            </ClientOnly>
            <Transition name="slide">
                <Welcome v-show="showWelcomeScreen" />
            </Transition>
            <div class="flex flex-col z-20">
                <Header />
                <slot />
                <LazyFooter class="mt-auto" />
            </div>
        </div>
    </Lenis>
</template>
<style scoped>
.spbg {
    /* background: url('https://i.ytimg.com/vi/nqxrFkfgLJY/maxresdefault.jpg') repeat-y center center/cover; */
    /* background-color: #663dff; */
    background-color: #673dff73;
    /* background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%); */
    background-image: linear-gradient(319deg, #673dff73 0%, #aa00ff8c 37%, #cc44989d 100%);
}

.slide-leave-to {
    transform: translateY(-100%);
}

.slide-leave-active {
    transition: transform .2s;

}
</style>