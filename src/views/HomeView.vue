<script setup>
import ButtonBlur from '@/components/ButtonBlur.vue';
import { ref } from 'vue'

const routeConfig = ref([
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/about',
        name: 'about',
    }
])
</script>

<template>
    <div class="home_main animate__animated animate__fadeIn">
        <!-- <img src="/img/LoXi_bg.webp" class="home_background" alt="LoXi Background"> -->
        <!-- <div class="home_text"> -->
        <img src="/img/LoXi_Logo.png" class="home_text_logo animate__animated animate__pulse" alt="LoXi Logo">
        <!-- <div class="home_text_title animate__animated animate__flipInX animate__delay-1s">洛溪 <span style="color: var(--theme-color);">LoXi</span></div> -->
        <div class="home_text_subtitle animate__animated animate__fadeInUp animate__delay-1s">
            Some days you bloom, some days you grow roots. Both matter.
        </div>
        <ButtonBlur path="/about_me" class="animate__animated animate__fadeInUp animate__delay-1s" text="About Me" />
        <!-- </div> -->
    </div>
</template>

<style scoped>
.home_main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.home_background {
    position: absolute;
    width: 200px;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* 
@media screen and (max-width: 1200px) {
    
} */

.home_text {
    padding: 20px;
}

.home_text_logo {
    width: 240px;
    margin-bottom: 20px;
}

.home_text_title {
    font-size: 48px;
    font-weight: bold;
    line-height: 1;
}

.home_text_subtitle {
    margin-bottom: 20px;
}
</style>