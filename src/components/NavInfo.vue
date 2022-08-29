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
      <!-- //////////////////////////////// -->
      <button type="button" class="NavBtn bg-green-500 text-xl">
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </button>

      <!-- ////////////////////////////// -->
      <button type="button" class="NavBtn mx-2 bg-red-500 text-lg">
        <font-awesome-icon icon="fa-solid fa-power-off" class="" />
      </button>
      <!-- ////////////////////////////// -->
      <div class="content text-xl">
        <font-awesome-icon icon="fa-solid fa-moon" class="text-blue-600" />
        <input type="checkbox" id="tooglenight" class="cbx hidden shadow-sm" />
        <label for="tooglenight" class="switch shadow-sm"></label>
        <font-awesome-icon icon="fas fa-sun" class="text-orange-500" />
      </div>
      <!-- ////////////////////////////// -->
    </div>
    <!-- <div class="NavTarikh">
      <button type="button" class="TarikhBtn">
        {{ Tarikh[3] }} {{ Tarikh[2] }} {{ Tarikh[0] }} {{ Tarikh[1] }}
      </button>
    </div> -->
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
