<script setup>
import Sponsor from './Sponsor.vue';
</script>

<template>
    <div class="cosh_home_main">
        <img src="/img/LoXi/LoXi_avatar.webp" class="main_banner" alt="Art by cannot">
        <div class="home_main_content">
            <img src="/img/logo/logo_cosh_dark.svg" alt="COSH Logo" class="logo animate__animated animate__pulse">
            <div class="title animate__animated animate__fadeInUp animate__delay-1s">LoXi</div>
            <div class="desc animate__animated animate__fadeInUp animate__delay-2s">
                橘熟霜轻浮洛水，溪光映果满庭芳
            </div>
            <!-- <div class="animate__animated animate__fadeInUp animate__delay-2s">
                <button class="loxi_button">

                </button>
            </div> -->
            <div class="animate__animated animate__fadeInUp animate__delay-2s">
                <Sponsor />
            </div>
        </div>
    </div>
</template>

<style scoped>
.cosh_home_main {
    position: relative;
    height: 100vh;
}

.main_banner {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    max-width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.4;
    filter: blur(6px);
}

.home_main_content {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding-left: 40px;
}

.logo {
    width: 100px;
    margin-bottom: 20px;
}

.title {
    color: var(--theme-color);
    font-size: 80px;
    line-height: 1;
    margin: -4px -8px;
    font-family: 'HooskaiChamferedSquare';
}

.desc {
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
