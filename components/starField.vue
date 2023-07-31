<script setup lang="ts">

const starRef = shallowRef<THREE.Mesh>()
const { onLoop } = useRenderLoop()

onLoop(({ delta }) => {
  if (starRef.value) {
    // @ts-ignore
    starRef.value.value.rotation.y += delta * 0.1
    // @ts-ignore
    starRef.value.value.rotation.x += delta * 0.09
    // @ts-ignore
    starRef.value.value.rotation.z += delta * 0.09
  }
})
</script>

<template>
  <TresCanvas window-size alpha>
    <Suspense>
      <Stars :radius="50" :size="0.4" :factor="10" :depth="10" ref="starRef" />
    </Suspense>
  </TresCanvas>
</template>