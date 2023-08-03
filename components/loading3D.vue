<script setup>
const { hasFinishLoading, progress } = await useProgress()
</script>

<template>
  <Transition name="fade-overlay" enter-active-class="opacity-1 transition-opacity duration-200"
    leave-active-class="opacity-0 transition-opacity duration-200">
    <div v-show="!hasFinishLoading"
      class="absolute bg-grey-600 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-white text-xl font-mono">
      <span class="loader">{{ progress }} %</span>
    </div>
  </Transition>
</template>

<style scoped>
.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 0.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }
    50%, 100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%, 50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
      
</style>
