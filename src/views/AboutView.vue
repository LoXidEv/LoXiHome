<script setup>
import ImageCard from '@/components/ImageCard.vue'
import RouteNamePage from '@/components/RouteNamePage.vue'
import Contact from '@/components/Contact.vue'
import Friends from '@/components/Friends.vue'
import { ref } from 'vue'

const imageCardConfig = ref([{
    src: '/img/LoXi_O.webp',
    title: '',
    subtitle: '',
}, {
    src: '/img/LoXi_O_6.webp',
    title: '',
    subtitle: '',
}])

const contactLinkConfig = ref([{
    title: 'GitHub',
    link: 'https://github.com/loxidev',
}, {
    title: 'Afdian',
    link: 'https://afdian.com/a/loxidev',
}, {
    title: 'Bilibili',
    link: 'https://space.bilibili.com/1093209533',
}])

</script>

<template>
    <div class="about_main animate__animated animate__fadeIn">
        <img src="/img/LoXi_Logo.png" class="about_logo" alt="LoXi Logo">
        <div class="about_content">
            <div class="width">
                <RouteNamePage />
                <h1># About Me</h1>
                <br>
                <div class="about_intro">
                    <img class="about_loxiOc" src="/img/LoXi_O_2.webp" alt="LoXi OC">
                    <div class="about_intro_text">
                        <div class="about_intro_name">洛溪 LoXi (@LoXidEv)</div>
                        Frontend-Developer
                        <br>
                        Student & COSH Owner
                        <a class="about_cosh" href="https://cosh.work">
                            <img width="25px" src="/img/logo_cosh_dark.svg" alt="COSH Logo">
                            cosh.work
                        </a>
                    </div>
                </div>
                <div class="about_contact">
                    <Contact v-for="item in contactLinkConfig" :key="item.link" :text="item.title" :link="item.link" />
                </div>
                <div class="about_draw">
                    <img src="/img/verlan.webp" class="about_draw_img" alt="Verlan">
                    <div>
                        <div class="about_draw_title">OC 画集</div>
                        <div class="about_draw_subtitle">由 Verlan 创作</div>
                    </div>
                </div>
                <div class="about_draw_content">
                    <ImageCard v-for="item in imageCardConfig" :key="item.src" :src="item.src" :title="item.title"
                        :subtitle="item.subtitle" />
                </div>
                <Friends />
            </div>
        </div>
    </div>
</template>

<style scoped>
.about_intro_name {
    font-size: 26px;
    font-weight: bold;
    line-height: 1;
}

.about_cosh {
    color: var(--text-color);
    text-decoration: none;
    width: 180px;
    font-family: 'HooskaiChamferedSquare Regular';
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    border: 2px solid #f0f0f0;
    border-radius: var(--border-radius);
    background-color: #ffffff;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f0f0f0cc;
    }
}

.about_contact {
    width: 100%;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
}

.about_draw_content {
    width: 100%;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.about_draw_img {
    width: 60px;
}

.about_draw_title {
    line-height: 1;
    font-size: 20px;
    font-weight: bold;
}

.about_draw_subtitle {
    opacity: 0.6;
}

.about_draw {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid #f0f0f0;
    border-radius: var(--border-radius);
    background-color: #ffffff;
    margin-top: 20px;
    padding: 10px;
}

.about_intro {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

@media screen and (max-width: 470px) {
    .width {
        width: 100% !important;
    }

    .about_intro {
        flex-wrap: wrap;
    }
}

.about_loxiOc {
    width: 120px;
    border: 2px solid #f0f0f0;
    border-radius: var(--border-radius);
}

.about_main {
    min-height: 100vh;
}

.about_content {
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'HooskaiChamferedSquare Regular';
    }
}

.about_logo {
    filter: blur(4px);
    z-index: -1;
    width: 320px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.width {
    padding: 20px;
    width: 60%;
}
</style>