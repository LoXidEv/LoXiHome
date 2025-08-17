<script setup>
import Navbar from '@/components/UI/Navbar.vue';
import CFooter from '@/components/UI/Footer.vue';

</script>

<template>
  <Navbar />
  <div class="loxi_main">

  </div>
  <RouterView></RouterView>
  <CFooter />
</template>

<style>
@font-face {
  font-family: 'HooskaiChamferedSquare Regular';
  /* font-style: normal;
  font-weight: 400; */
  src: url('/font/HooskaiChamferedSquare-Regular.ttf');
}

@font-face {
  font-family: 'Poppins Bold';
  /* font-style: normal;
  font-weight: 400; */
  src: url('/font/Poppins-Bold.ttf');
}

@font-face {
  font-family: 'Poppins Regular';
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
  /* scrollbar-width: none; */
}

:root {
  --text-color: #474440;
  --theme-color: #4664b0;
  --border-radius: 8px;
}

body {
  font-family: 'Poppins Regular';
  min-width: 320px;
  color: var(--text-color);
  background-color: #ffffff;
}
</style>
