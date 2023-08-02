
<template>
  <TresCanvas shadows alpha>
    <TresPerspectiveCamera :position="[0, -4, 14]" />
    <OrbitControls :enableZoom="false" :enableDamping="true" :maxPolarAngle="Math.PI / 2" :minPolarAngle="Math.PI / 2" />
    <TresAmbientLight :intensity="7" />
    <Suspense>
      <GLTFModel path="/pc/scene.gltf" :position="[2.1, -2.8, 0]" :rotation-x="Math.PI * 0.03" :rotation-y="Math.PI * 1.5"
        darco="true" />
    </Suspense>
    <TresDirectionalLight :position="[4, 0, 10]" :intensity="5" cast-shadow />
  </TresCanvas>
</template>