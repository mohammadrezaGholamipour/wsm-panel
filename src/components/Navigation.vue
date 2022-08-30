<script setup></script>

<template>
  <nav class="Navigation">
    <button
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      منو
    </button>
    <div
      class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header flex items-center justify-between p-4">
        <h5
          class="offcanvas-title mb-0 leading-normal font-semibold"
          id="offcanvasRightLabel"
        >
          Offcanvas right
        </h5>
        <button
          type="button"
          class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body flex-grow p-4 overflow-y-auto">...</div>
    </div>
    <div class="NavIcon">
      <!-- //////////////////////////////// -->
      <button type="button" class="BtnMessages">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p class="ml-1">پیام ها</p>
      </button>
      <!-- ////////////////////////////// -->
      <div class="flex justify-center">
        <div>
          <div class="dropdown mx-2 relative">
            <button
              data-bs-toggle="dropdown"
              id="dropdownMenuButton2"
              aria-expanded="false"
              class="BtnAccount"
              type="button"
            >
              <font-awesome-icon icon="fa-solid fa-user-pen" />
            </button>
            <ul
              class="UiAccount hidden dropdown-menu"
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
        </div>
      </div>
      <!-- ////////////////////////////// -->
      <button type="button" class="BtnLogout">
        <font-awesome-icon icon="fa-solid fa-power-off" />
      </button>
      <!-- ////////////////////////////// -->
      <div class="content text-xl mx-2">
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
