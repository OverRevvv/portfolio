<template>
    <div class="🐎 text-white font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">🐎 ️</div>
</template>

<style scoped>
@font-face {
    font-family: Muybridge;
    src: url(https://www.lorp.org/fonts/MuybridgeGX.woff2);
}

@keyframes Gallop {
    from {
        font-variation-settings: "TIME" 0;
    }
    to {
        font-variation-settings: "TIME" 15;
    }
}
.🐎 {
    display: inline-block;
    font-size: 200px;
    font-family: Muybridge;
    animation: 0.6s linear infinite Gallop;
}
.🐎:hover {
    animation-duration: 6s;
}
</style>