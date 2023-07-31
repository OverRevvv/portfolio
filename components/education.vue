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

    <div class="font-mono">
        <div class="text-4xl sm:text-6xl text-center dark:text-teal-300 font-medium mb-8">Education</div>
        <!-- <Horse class=" absolute sm:ml-[100vh] mt-20" /> -->
        <div class="absolute sm:block hidden h-full w-full top-[45rem] left-80">
                <Earth />
        </div>
        <div class="flex flex-col sm:ml-32">
            <div v-for="(item, index) in data" :key="item.heading" class="text-gray-200 mt-4 card">
                <div class="text-xl sm:text-2xl font-medium mb-1 dark:text-purple-200">{{ item.heading }}</div>
                <div class="text-lg sm:text-xl font-normal mb-1">{{ item.college }}</div>
                <div class="text-sm sm:text-base font-light dark:text-gray-400">{{ item.time }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    /* @apply backdrop-blur bg-[#11111160] text-center block w-96 p-6 m-4 rounded-3xl shadow; */
    @apply backdrop-blur-sm bg-[#15103088] text-center block sm:w-96 p-6 m-4 rounded-3xl shadow ;
}

.gpg {
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
}
/* bg-gradient-to-r from-fuchsia-500 to-cyan-500 */
</style>