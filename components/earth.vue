<template>
  <TresCanvas shadows alpha>
    <TresPerspectiveCamera :position="[0, 0, 4]" />
    <OrbitControls :enableZoom="false" :enableDamping="true" :autoRotate="true" :autoRotateSpeed="6" :maxPolarAngle="Math.PI / 2" :minPolarAngle="Math.PI / 2" />
    <TresAmbientLight :intensity="20" />
    <Suspense>
      <GLTFModel path="/planet/scene.gltf" :scale="1.3" darco="true" />
    </Suspense>
    <TresDirectionalLight :position="[4, 0, 16]" :intensity="30" cast-shadow />
  </TresCanvas>
</template>