<script setup lang="ts">

const starRef = shallowRef<THREE.Mesh>()
const { onLoop } = useRenderLoop()
const progress = ref(0)
const scRef = ref()
const cameraRef = ref()
const loadScroll = ref(false);

//@ts-ignore
function lerp(start, end, t) {
  return start * (1 - t) + end * t
}

onLoop(({ delta }) => {
  if (cameraRef.value) {
    if (progress.value <= 0.1) {
      cameraRef.value.position.z = -progress.value * 2 + 6
    } else {
      const t = (progress.value - 0.1) * 4 
      cameraRef.value.position.z = lerp(-0.1, 1, t * t)
    }
  }
  if (starRef.value) {
    // @ts-ignore
    starRef.value.value.rotation.y += delta * 0.01
    // @ts-ignore
    starRef.value.value.rotation.x += delta * 0.02
    // @ts-ignore
    // starRef.value.value.rotation.z += delta * 0.02
  }
})

//Function to prevent loading issue with stars component and scrollControl
function loadingScroll() {
  setTimeout(() => {
    loadScroll.value = true;
  }, 1000);
}
loadingScroll();
</script>

<template>
  <TresCanvas window-size alpha>
    <TresPerspectiveCamera ref="cameraRef" :position="[0, 2, 5]" />
    <ScrollControls v-if="loadScroll" ref="scRef" v-model="progress" :smooth-scroll="0.1" :distance="10" html-scroll />
    <Suspense>
      <Stars :size="0.5" :depth="30" :count="12000" ref="starRef" />
    </Suspense>
  </TresCanvas>
</template>