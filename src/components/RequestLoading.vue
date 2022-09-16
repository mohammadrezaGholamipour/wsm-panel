<script setup></script>
<template>
  <div>
    <div class="loading">
      <div class="inline-flex justify-between items-center">
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-purple-500"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-green-500"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-yellow-500"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300"
          role="status"
        ></div>
        <div
          class="spinner-grow mx-1 inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300"
          role="status"
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
.loading {
  position: fixed;
  overflow: show;
  z-index: 5001;
  margin: auto;
  height: 2em;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));
  background: -webkit-radial-gradient(
    rgba(20, 20, 20, 0.8),
    rgba(0, 0, 0, 0.8)
  );
}
</style>