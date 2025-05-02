<script setup>
import Profile from '@/components/Profile.vue';
import CodeTime from '@/components/Codetime.vue';
import COSH from '@/components/COSH.vue';
import Contact from '@/components/Contact.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <img src="/img/LoXi_O.webp" alt="LoXi" class="new_profile_bg">
    <COSH />
    <Profile />
    <CodeTime />
    <Navbar />
    <Contact />
  </div>
</template>

<style>
.new_profile_bg {
  /* transition: all 0.5s; */
  border-radius: 8px;
  position: absolute;
  --webkit-user-drag: none;
  width: 400px;
  top: -35px;
  right: -100px;
  z-index: -9;
  /* filter: blur(1px); */
}
</style>