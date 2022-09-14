<template>
  <div class="RequestLoading">
    <div class="wrapper">
      <div class="flex justify-center items-center space-x-2">
        <div
          class="spinner-grow inline-block ml-1 w-8 h-8 bg-current rounded-full text-purple-500"
          role="status"
        ></div>
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-green-500"
          role="status"
        ></div>
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-red-500"
          role="status"
        ></div>
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-yellow-500"
          role="status"
        ></div>
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-blue-300"
          role="status"
        ></div>
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-gray-300"
          role="status"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.RequestLoading {
  height: 3000px !important;
  width: 117vw !important;
  background: #666b70;
  position: fixed;
  z-index: 999;
  opacity: 0.8;
  padding: 0;
  margin: 0;
}
.wrapper {
  width: 250px;
  height: 60px;
  position: absolute;
  left: calc(50% + 140px);
  top: 52%;
  transform: translate(-50%, -50%);
}
</style>
