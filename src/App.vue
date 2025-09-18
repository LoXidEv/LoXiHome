<script setup>
import Navbar from '@/components/UI/Navbar.vue';
import CFooter from '@/components/UI/Footer.vue';
// import Tool from '@/components/Tool.vue';
// import Start from '@/components/Start.vue';
// import { ref } from 'vue';

// const isStart = ref(true);
</script>

<template>
  <!-- <Start v-if="isStart" /> -->
  <div class="loxi_main animate__animated animate__fadeIn">
    <div class="loxi_author">
      <div class="loxi_blur"></div>
      <div class="loxi_padding">
        <img src="/img/LoXi/LoXi_Logo.png" alt="LoXi Logo" class="author_logo animate__animated animate__pulse" />
        <!-- <div class="author_name">洛溪 LoXi</div> -->
        <div class="author_desc animate__animated animate__fadeInUp animate__delay-1s">Some days you bloom,<br>some days
          you grow roots.<br>Both matter.</div>
        <div class="author_contact animate__animated animate__fadeInUp animate__delay-2s">
          <!-- <a target="_blank" v-for="item in contactLinkConfig" :href="item.link" class="contact_link">{{ item.name
          }}</a> -->
          <RouterLink class="contact_link" to="/contact">Contact me</RouterLink>
        </div>
      </div>
    </div>
    <div class="loxi_page">
      <Navbar />
      <div class="loxi_view">
        <img src="/img/LoXi/LoXi_Fly.webp" alt="LoXi Fly Bg" class="view_bg">
        <div class="loxi_width">
          <RouterView></RouterView>
          <CFooter />
        </div>
      </div>
      <!-- <Tool /> -->
    </div>
  </div>
</template>

<style>
.view_bg {
  position: fixed;
  bottom: 0;
  right: -100px;
  width: 800px;
  max-width: 100%;
  z-index: 0;
  opacity: 0.2;
}

@media screen and (min-width: 1240px) {
  .loxi_width {
    width: 60% !important;
  }
}

.loxi_width {
  width: 100%;
}

.loxi_view {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.loxi_page {
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--background-color);
}

.contact_link {
  text-decoration: none;
  color: var(--theme-color);
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
}

.author_contact {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.author_desc {
  font-size: 18px;
  font-weight: bold;
  font-family: 'MonaspaceKryptonVarVF';
}

.loxi_main {
  display: flex;
  align-items: start;
  width: 100%;
}

.loxi_author {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 320px;
  width: 40%;
  overflow: hidden;
}

.loxi_blur {
  background-image: var(--author-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  background-color: transparent;
  /* backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); */
  z-index: 1;
}

.loxi_padding {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 20px 0;
}

.author_logo {
  width: 70%;
}

@media screen and (max-width: 800px) {
  .loxi_author {
    width: 100%;
    height: auto;
  }

  .loxi_main {
    flex-direction: column;
  }

  .loxi_page {
    height: auto;
  }
}
</style>
