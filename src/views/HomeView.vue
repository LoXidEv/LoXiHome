<script setup>
import ByProFile from '@/components/ByProFile.vue';
import Contact from '@/components/Contact.vue';
import AllApi from '@/components/AllApi.vue';
// import Navbar from './components/Navbar.vue';
import COSH from '@/components/COSH.vue';
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <ByProFile />
    <!-- <Navbar /> -->
    <!-- <RouterView /> -->
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
          种类：暮光狐
          <br>
          喜好：咖啡、柑橘属水果
          <br>
          擅长：睡觉、计算机
          <!-- 口味：香草椰子灰 -->
        </div>
      </div>
    </div>
    <COSH />
    <Contact />
  </div>
</template>

<style>
.OC-IMG {
  width: 120px;
  user-select: none;
  -webkit-user-drag: none;
}

.OC {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>