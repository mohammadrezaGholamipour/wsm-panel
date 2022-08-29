<script setup>
import { ref } from "@vue/reactivity";

const TarikhOption = [
  {
    day: "numeric",
  },
  {
    month: "long",
  },
  {
    weekday: "long",
  },
  {
    year: "numeric",
  },
];
const Tarikh = ref([]);
TarikhOption.forEach((items) => {
  Tarikh.value.push(new Intl.DateTimeFormat("fa-IR", items).format(new Date()));
});
</script>

<template>
  <nav class="NavInfo">
    <div class="NavIcon">
      <div
        class="px-4 py-1 mr-3 bg-green-400 text-2xl flex items-center justify-center text-center rounded-lg shadow-lg"
      >
        <router-link class="flex justify-center items-center" to="">
          <p class="text-white">پیام ها</p>
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="text-white ml-2"
          />
        </router-link>
      </div>

      <!-- ////////////////////////////// -->
      <router-link class="flex justify-center items-center" to="">
        <button type="button" class="BtnLogOut">
          <font-awesome-icon
            icon="fa-solid fa-power-off"
            class="text-xl pt-1"
          />
        </button>

        <p class="px-1">خارج شدن</p>
      </router-link>

      <!-- ////////////////////////////// -->
      <div class="content px-2 text-xl">
        <font-awesome-icon icon="fa-solid fa-moon" class="text-blue-600" />
        <input type="checkbox" id="tooglenight" class="cbx hidden shadow-sm" />
        <label for="tooglenight" class="switch shadow-sm"></label>
        <font-awesome-icon icon="fas fa-sun" class="text-orange-500" />
      </div>
      <!-- ////////////////////////////// -->
    </div>
    <div class="NavTarikh">
      <button type="button" class="TarikhBtn">
        {{ Tarikh[3] }} {{ Tarikh[2] }} {{ Tarikh[0] }} {{ Tarikh[1] }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.night {
  background-position: 0 0;
}
.content {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
}
.switch {
  transition: all 0.3s ease;
  background: #2563eb;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  display: block;
  height: 20px;
  margin: 0 7px;
  width: 44px;
}
.switch:after {
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
  border: solid 1.75px #9c9c9c;
  transition: all 0.3s ease;
  background: #ffffff;
  border-radius: 100px;
  position: absolute;
  display: block;
  height: 26px;
  content: "";
  width: 26px;
  left: -2px;
  top: -3px;
}
.switch:active:after {
  transform: scale(1.15, 0.85);
}
.cbx:checked ~ label {
  background: #f97316;
}
.cbx:checked ~ label:after {
  left: 20px;
  background: #ffffff;
}

.hidden {
  display: none;
}
</style>