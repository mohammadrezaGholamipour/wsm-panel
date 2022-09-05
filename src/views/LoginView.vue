<script setup></script>
<template>
  <div class="LoginPage">
    <div class="LoginForm">
      <img src="../assets/image/Logo.png" alt="مرکز خدمات حوزه های علمیه" />
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
          <button type="button" class="LoginBtn">وارد شدن</button>

          <a href="#!" class="LoginForgetInfo">
            رمز یا نام کاربری خود را فراموش کرده اید؟</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
