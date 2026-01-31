<script setup>
import Navbar from '@/components/UI/Navbar.vue';
import CFooter from '@/components/UI/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="animate__animated animate__fadeIn">
    <div class="loxi_width">
      <RouterView></RouterView>
    </div>
  </div>
  <CFooter />
</template>

<style>
@media screen and (min-width: 1240px) {
  .loxi_width {
    width: 60% !important;
  }
}

.loxi_width {
  margin: auto;
  width: 100%;
}

.loxi_page {
  padding: 100px 20px;
}
</style>
