<script setup></script>

<template>
  <nav class="NavInfo">
    <div class="NavIcon">
      <!-- //////////////////////////////// -->

      <button
        type="button"
        class="border-green-600 rounded-md NavBtn text-xl py-0.5 text-white bg-green-600"
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p class="ml-1">پیام ها</p>
      </button>
      <!-- ////////////////////////////// -->
      <div class="dropdown ml-2 relative">
        <button
          class="dropdown-toggle px-2 py-2 text-lg bg-purple-600 text-white rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon icon="fa-solid fa-user-pen" />
        </button>
        <ul
          class="text-center dropdown-menu min-w-max absolute hidden text-base z-50 float-left py-2 list-none rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none bg-gray-800"
          aria-labelledby="dropdownMenuButton2"
        >
          <h6
            class="text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent"
          >
            آقای مجتبی شاقی
          </h6>
          <span
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300"
            >مدیر فنی
          </span>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
              href="#"
              >تغیر اطلاعات</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
              href="#"
            >
              نظر سنجی</a
            >
          </li>

          <li>
            <hr
              class="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25"
            />
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
              href="#"
              >خروج از اکانت</a
            >
          </li>
        </ul>
      </div>
      <!-- ////////////////////////////// -->
      <button
        type="button"
        class="border-red-500 NavBtn mx-2 text-lg text-white bg-red-600"
      >
        <font-awesome-icon icon="fa-solid fa-power-off" />
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
