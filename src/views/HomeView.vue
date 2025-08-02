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
        <img src="/img/LoXi_bg.webp" class="home_background" alt="LoXi Background">
        <!-- <img src="/img/LoXi_O_6.webp" class="home_background" alt="LoXi Background"> -->
        <div class="home_text">
            <img src="/img/LoXi_Logo.png" class="home_text_logo" alt="LoXi Logo">
            <div class="home_text_title">洛溪 LoXi</div>
            <div class="home_text_subtitle">
                Some days you bloom, some days you grow roots. Both matter.
            </div>
            <ButtonBlur path="/about_me" text="About Me" />
        </div>
    </div>
</template>

<style scoped>
.home_main {
    position: relative;
    width: 100%;
    height: 100vh;
}

.home_background {
    filter: blur(4px);
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: -1;
}

.home_text {
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    /* border-radius: var(--border-radius); */
    /* backdrop-filter: blur(4px); */
}

.home_text_logo {
    width: 240px;
}

.home_text_title {
    font-size: 48px;
    font-weight: bold;
    line-height: 1;
}

.home_text_subtitle{
    margin-bottom: 10px;
}
</style>