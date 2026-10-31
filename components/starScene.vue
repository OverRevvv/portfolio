<script setup lang="ts">
// Lives inside <TresCanvas> so useLoop() has a Tres context (required in Tres v5).
import { useLoop } from '@tresjs/core'

const progress = ref(0)
const cameraRef = shallowRef<any>(null)
const groupRef = shallowRef<any>(null)
const loadScroll = ref(false)

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  const cam = cameraRef.value
  if (cam) {
    if (progress.value <= 0.1) {
      cam.position.z = -progress.value * 2 + 6
    } else {
      const t = (progress.value - 0.1) * 4
      cam.position.z = lerp(-0.1, 1, t * t)
    }
  }
  const g = groupRef.value
  if (g) {
    g.rotation.y += delta * 0.06
    g.rotation.x += delta * 0.07
  }
})

// Prevents loading issue between the stars and ScrollControls
onMounted(() => setTimeout(() => (loadScroll.value = true), 1000))
</script>

<template>
  <TresPerspectiveCamera ref="cameraRef" :position="[0, 2, 5]" />
  <ScrollControls v-if="loadScroll" v-model="progress" :smooth-scroll="0.1" :distance="10" html-scroll />
  <TresGroup ref="groupRef">
    <Stars :size="0.5" :depth="30" :count="3000" />
  </TresGroup>
</template>
