<template>
  <div class="flex flex-col justify-center items-center h-screen w-full fixed z-50 backdrop-blur-md shadow-md ">
    <span class="loader"></span>
    <span class="loader2 mt-8"></span>
  </div>
</template>

<style scoped>
.loader {
  width: 32px;
  height: 90px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  border-bottom: 10px solid #FF3D00;
  background-color: #FFF;
  background-image: radial-gradient(ellipse at center, #FFF 34%, #FF3D00 35%, #FF3D00 54%, #FFF 55%), linear-gradient(#FF3D00 10px, transparent 0);
  background-size: 28px 28px;
  background-position: center 20px, center 2px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloaderBack 1s linear infinite alternate;
}

.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0px 15px #FF3D00 inset;
  top: 67px;
}

.loader::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 34px;
  height: 34px;
  top: 112%;
  background: radial-gradient(ellipse at center, #ffdf00 8%, rgba(249, 62, 0, 0.6) 24%, rgba(0, 0, 0, 0) 100%);
  border-radius: 50% 50% 0;
  background-repeat: no-repeat;
  background-position: -44px -44px;
  background-size: 100px 100px;
  box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

.loader2 {
  position: relative;
  display: inline-block;
}
.loader2::before {
  
  content: 'Loading';
  color: #10bde9;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  display: inline-block;
  box-sizing: border-box;
  animation: floating 1s ease-out infinite alternate;
}
.loader2::after {
  content: '';  
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader2 1s ease-out infinite alternate;
}

@keyframes animloaderBack {

  0%,
  30%,
  70% {
    transform: translateY(0px);
  }

  20%,
  40%,
  100% {
    transform: translateY(-5px);
  }
}

@keyframes animloader {
  0% {
    box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
    width: 34px;
    height: 34px;
    background-position: -44px -44px;
    background-size: 100px 100px;
  }

  100% {
    box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
    width: 30px;
    height: 28px;
    background-position: -36px -36px;
    background-size: 80px 80px;
  }
}
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25px);
  }
}
@keyframes animloader2 {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>