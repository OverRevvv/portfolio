<template>
  <TresCanvas alpha clear-color="#000000" :clear-alpha="0">
    <TresPerspectiveCamera :position="[0, 0, 4]" />
    <OrbitControls :enableZoom="false" :enableDamping="true" :autoRotate="true" :autoRotateSpeed="6" :maxPolarAngle="Math.PI / 2" :minPolarAngle="Math.PI / 2" />
    <TresAmbientLight :intensity="1.5" />
    <Suspense>
      <GLTFModel path="/planet/scene.glb" :scale="1.3" />
    </Suspense>
    <TresDirectionalLight :position="[0, 0, 10]" :intensity="2" cast-shadow />
  </TresCanvas>
</template>