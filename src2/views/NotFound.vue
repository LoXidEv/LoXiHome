<script setup>
import ButtonBlur from '@/components/ButtonBlur.vue';
</script>

<template>
    <div class="notfound_main animate__animated animate__fadeIn">
        <!-- <img src="/img/LoXi_bg.webp" class="notfound_background" alt="LoXi Background"> -->
        <!-- <div class="notfound_text"> -->
        <img src="/img/LoXi_Logo.png" class="notfound_text_logo animate__animated animate__pulse" alt="LoXi Logo">
        <!-- <div class="notfound_text_title animate__animated animate__flipInX animate__delay-1s">洛溪 <span style="color: var(--theme-color);">LoXi</span></div> -->
        <div class="notfound_text_subtitle animate__animated animate__fadeInUp animate__delay-1s">
            橘熟霜轻浮洛水，溪光映果满庭芳
        </div>
        <ButtonBlur path="/" class="animate__animated animate__fadeInUp animate__delay-1s" text="About Me" />
        <!-- </div> -->
    </div>
</template>

<style scoped>
.notfound_main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* .notfound_background {
    position: absolute;
    width: 200px;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
} */
/* 
@media screen and (max-width: 1200px) {
    
} */

.notfound_text {
    padding: 20px;
}

.notfound_text_logo {
    width: 240px;
    margin-bottom: 20px;
}

/* .notfound_text_title {
    font-size: 48px;
    font-weight: bold;
    line-height: 1;
} */

.notfound_text_subtitle {
    text-align: center;
    padding: 0 20px;
    margin-bottom: 20px;
}
</style>