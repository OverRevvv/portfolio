<script setup>
// Create reactive refs for viewport width and height
const viewportWidth = ref(0);
const viewportHeight = ref(0);

const TxtSize = ref(50);
const Gap = ref(null);

// Update viewport dimensions on window resize
const handleResize = () => {
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;
};


// Add event listener on component mount and remove on component unmount
onMounted(() => {
  if (typeof window !== 'undefined') {
    viewportWidth.value = window.innerWidth;
    viewportHeight.value = window.innerHeight;
    window.addEventListener('resize', handleResize);
  }
});

watchEffect(() => {
  if (viewportWidth.value < 500) {
    TxtSize.value = 30;
    Gap.value = "";
  } else {
    TxtSize.value = 50;
    Gap.value = "```";
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<template>
    <div class="container">
        <div class="content-box">
            <div class="mb-2">
                <div class="text-4xl sm:ml-12 sm:text-5xl">
                    Hello,I am 
                    <!-- <a href="https://git.io/typing-svg"><img class="inline-block" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=50&duration=3000&pause=1000&color=C026D3&center=true&vCenter=true&width=260&lines=Arnav;OverRevvv" alt="Typing SVG" /></a> -->
                    <a href="https://git.io/typing-svg">
                        <img
                        class="inline-block"
                        :src="`https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=${TxtSize}&duration=3000&pause=1000&color=C026D3&center=true&vCenter=true&width=260&lines=Arnav${Gap};OverRevvv`"
                        alt="Typing SVG"
                        />
                    </a>
                </div>
            </div>
            <div class="text-1xl sm:text-1xl sm:ml-12 opacity-0">
                <span class="text-blue-700">ViewPort Width: {{ viewportWidth }}px</span>
                <br />
                <span class="text-indigo-600">ViewPort Height: {{ viewportHeight }}px</span>
            </div>
        </div>
        <img src="/images/pfp.jpg" alt="pfp" class="pfp" />
    </div>
</template>

<style scoped>
.container {
    @apply z-10 dark:text-gray-100 flex items-center justify-between sm:flex-row flex-col-reverse font-mono;
}

.content-box {
    @apply pt-6 text-center sm:text-left;
}

.pfp {
    @apply rounded-full h-52 w-52 z-30 md:h-64 md:w-64 border-[#490966] border-4;
}

</style>