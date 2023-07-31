<script lang="ts" setup>
import {
    Box,
    Camera,
    Renderer,
    Scene,
    RendererPublicInterface,
    MeshPublicInterface,
    PhongMaterial,
    Texture,
    AmbientLight,
} from 'troisjs';

const rendererC = ref<RendererPublicInterface>()
const box = ref<MeshPublicInterface>()

onMounted(() => {
    rendererC.value!.onBeforeRender(() => {
        box.value!.mesh.rotation.x += 0.01;
        box.value!.mesh.rotation.y += 0.01;
        box.value!.mesh.rotation.z += 0.01;
    })
})
</script>

<template>
    <Renderer :orbit-ctrl="true" ref="rendererC" resize="window" :alpha="true">
        <Camera :position="{ z: 6 }" :fov="50"/>
        <Scene>
            <AmbientLight :intensity="1" />
            <!-- <DirectionalLight :position="{ x: 20, z: 50 }" :intensity="1" /> -->
            <Box :size="2" ref="box" :rotation="{ y: Math.PI / 4, x: Math.PI / 4, z: Math.PI / 4 }">
                <PhongMaterial>
                    <Texture src="/images/hot.jpg" />
                </PhongMaterial>
            </Box>
        </Scene>
    </Renderer>
</template>