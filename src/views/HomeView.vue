<script setup>
// import ByProFile from '@/components/ByProFile.vue';
// import Contact from '@/components/Contact.vue';
// import AllApi from '@/components/AllApi.vue';
// import Navbar from './components/Navbar.vue';
// import COSH from '@/components/COSH.vue';
import Profile from '@/components/New/Profile.vue';
import CodeTime from '@/components/New/CodeTime.vue';
import COSH from '@/components/New/COSH.vue';
import Contact from '@/components/New/Contact.vue';
import Navbar from '@/components/New/Navbar.vue';
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <img src="/img/LoXi_O.webp" alt="LoXi" class="new_profile_bg">
    <COSH />
    <Profile />
    <CodeTime />
    <Navbar />
    <Contact />
    <!-- <ByProFile />
    <AllApi />
    <div class="Card">
      <div class="OC">
        <img src="/img/super-oc-game.webp" class="OC-IMG">
        <div>
          <h2 style="user-select: none;">超级动物设定</h2>
          <small style="opacity: 0.5;user-select: none;">Powered By Super Animals Royale</small>
          <br>
          名称：LoXi
          <br>
          物种：暮光狐
          <br>
          喜好：柑橘属水果
          <br>
          擅长：睡大觉、计算机网页开发
        </div>
      </div>
    </div>
    <COSH />
    <Contact /> -->
  </div>
</template>

<style>
.new_profile_bg {
  /* transition: all 0.5s; */
  border-radius: 8px;
  position: absolute;
  width: 400px;
  top: -50px;
  right: -100px;
  z-index: -9;
  /* filter: blur(1px); */
}

/* .OC-IMG {
  width: 130px;
  user-select: none;
  -webkit-user-drag: none;
}

.OC {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
} */
</style>