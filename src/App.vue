<script setup>

</script>

<template>
  <!-- <div class="Background"></div> -->
  <main class="main">
    <div class="width">
      <RouterView />
    </div>
  </main>
</template>

<style>
@font-face {
  font-family: 'Poppins Bold';
  /* font-style: normal;
  font-weight: 400; */
  src: url('/font/Poppins-Bold.ttf');
}

@font-face {
  font-family: 'Poppins SemiBold';
  /* font-style: normal;
  font-weight: 400; */
  src: url('/font/Poppins-SemiBold.ttf');
}

@font-face {
  font-family: 'Poppins Regular';
  /* font-style: normal;
  font-weight: 400; */
  src: url('/font/Poppins-Regular.ttf');
}

/* @import url('https://fonts.font.im/css2?family=Noto+Sans+SC:wght@500&display=swap'); */

* {
  padding: 0;
  margin: 0;
}

:root {
  --theme-color-1: #ffca80;
  --theme-color-2: #7da7d4;
  --theme-color-2-oc: #7da7d4c7;
  --card-bg-color: #f3f3f3;
  --card-bg-color-hover: #ebebeb;
  --card-border-color: #f3f3f3;
  --text-color: #2b3d4f;
}

body {
  font-family: 'Poppins SemiBold';
  min-width: 320px;
  color: #2b3d4f;
  /* background-color: #f3f3f3f3; */
  /* background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("https://avatars.githubusercontent.com/u/110319858?v=4"); */
  /* font-family: 'Noto Sans SC', sans-serif; */
}

@media screen and (min-width: 1240px) {
  .width {
    width: 40% !important;
  }
}

@media screen and (max-width: 650px) {
  .width {
    width: 90% !important;
  }
}

.width {
  width: 70%;
}

.Background {
  z-index: -1;
  height: 100vh;
  width: 100vw;
  filter: blur(10px);
  background-position: center, center;
  /* background-repeat: repeat,no-repeat; */
  background-size: cover;
  position: fixed;
  -webkit-user-drag: none;
  background-image: url("/img/bg.webp");
}

.main {
  /* position: relative;
  z-index: 1; */
  /* background: #ffffff; */
  user-select: none;
  /* background-color: #9dbcd1; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* overflow: hidden; */
}

/* .new-a-card-mask {
  background-color: #e0e0e0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  user-select: none;
} */

.Card {
  margin: 5px 0;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  /* box-shadow: 0 0 10px #dbdbdb; */
}
</style>
