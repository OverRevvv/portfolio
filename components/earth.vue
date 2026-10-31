<template>
  <TresCanvas alpha>
    <TresPerspectiveCamera :position="[0, 0, 4]" />
    <OrbitControls :enableZoom="false" :enableDamping="true" :autoRotate="true" :autoRotateSpeed="6" :maxPolarAngle="Math.PI / 2" :minPolarAngle="Math.PI / 2" />
    <TresAmbientLight :intensity="50" />
    <Suspense>
      <GLTFModel path="/planet/scene.gltf" :scale="1.3" darco="true" />
    </Suspense>
    <TresDirectionalLight :position="[0, 0, 10]" :intensity="60" cast-shadow />
  </TresCanvas>
</template>