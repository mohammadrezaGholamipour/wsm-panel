<script setup></script>
<template>
  <div class="LoginPage">
    <div class="LoginForm">
      <form>
        <div class="LoginParentInput">
          <input
            type="text"
            class="LoginInput"
            placeholder="نام کاربری را وارد کنید"
          />

          <input
            type="password"
            class="LoginInput"
            id="exampleInputPassword2"
            placeholder="رمز عبور را وارد کنید"
          />
        </div>
        <div class="LoginParentBtn">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            وارد شدن
          </button>

          <a
            href="#!"
            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            رمز یا نام کاربری خود را فراموش کرده اید؟</a
          >
        </div>
      </form>
    </div>
  </div>
</template>