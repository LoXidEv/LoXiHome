<script setup>
import ByProFile from '@/components/ByProFile.vue';
import Contact from '@/components/Contact.vue';
import Navbar from './components/Navbar.vue';
import NetFox from '@/components/NetFox.vue';
</script>

<template>
  <main class="main">
    <div class="width">
      <ByProFile />
      <Navbar />
      <RouterView />
      <NetFox />
      <Contact />
    </div>
  </main>
</template>

<style>
/* @import url('https://fonts.font.im/css2?family=Noto+Sans+SC:wght@500&display=swap'); */

* {
  padding: 0;
  margin: 0;
}

:root {
  --theme-color-1: #ffca80;
  --theme-color-2: #7da7d4;
  --theme-color-2-oc: #7da7d4c7;
  --text-color: #2b3d4f;
}

body {
  color: #2b3d4f;
  background-color: #f3f3f3f3;
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

.main {
  /* width: 100%; */
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  min-height: 100vh;
}

.new-a-card-mask {
  background-color: #e0e0e0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  user-select: none;
}
</style>
