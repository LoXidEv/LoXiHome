<script setup>
import Music from '@/components/Music.vue'
</script>

<template>
  <main class="main" v-if="$route.name !== 'video'">
    <Music />
    <div class="width">
      <RouterView />
    </div>
  </main>
  
  <RouterView v-else></RouterView>
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
  scrollbar-width: none;
}

:root {
  --theme-color-1: #ffca80;
  --theme-color-2: #7da7d4;
  --theme-color-2-oc: #7da7d4c7;
  --card-bg-color: #f3f3f3e8;
  --card-bg-color-hover: #ebebebe8;
  --card-border-color: #e4e4e4;
  --text-color: #2b3d4f;
}

body {
  font-family: 'Poppins SemiBold';
  min-width: 320px;
  color: #2b3d4f;
  background-color: #fff;
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
  padding: 8px 0 60px 0;
  position: relative;
  width: 70%;
}

.main {
  overflow: hidden;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.new_card {
  border: var(--card-border-color) 2px solid;
  /* text-align: center; */
  /* font-size: 28px; */
  /* line-height: 1; */
  /* font-weight: bold; */
  /* background-color: var(--card-bg-color); */
  padding: 8px 16px;
  /* display: block; */
  border-radius: 8px;

  .new_card_title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
