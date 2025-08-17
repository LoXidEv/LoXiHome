<script setup>
import Contact from '@/components/Contact.vue'
import Friends from '@/components/Friends.vue'
import { ref } from 'vue'
import COSH from '@/components/COSH.vue'

// const imageCardConfig = ref([{
//     src: '/img/LoXi_O.webp',
//     title: '',
//     subtitle: '',
// }, {
//     src: '/img/LoXi_O_6.webp',
//     title: '',
//     subtitle: '',
// }])

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
        <!-- <img src="/img/LoXi_O_6.webp" class="about_logo" alt="LoXi Logo"> -->
        <div class="about_content">
            <div class="width">
                <h1># About Me</h1>
                <br>
                <div class="about_intro">
                    <img class="about_loxiOc" src="https://avatars.githubusercontent.com/u/110319858?v=4" alt="LoXi OC">
                    <div class="about_intro_text">
                        <div class="about_intro_name">洛溪 LoXi</div>
                        Frontend-Developer
                        <br>
                        Student & COSH Member
                        <!-- <a class="about_cosh" href="https://cosh.work">
                            <img width="20px" src="/img/logo_cosh_dark.svg" alt="COSH Logo">
                            cosh.work
                        </a> -->
                    </div>
                </div>
                <div class="about_contact">
                    <Contact v-for="item in contactLinkConfig" :key="item.link" :text="item.title" :link="item.link" />
                </div>
                <COSH />
                <!-- <div class="about_draw">
                    <img src="/img/verlan.webp" class="about_draw_img" alt="Verlan">
                    <div>
                        <div class="about_draw_title">OC 画集</div>
                        <div class="about_draw_subtitle">感谢 Verlan 的创作</div>
                    </div>
                </div>
                <div class="about_draw_content">
                    <ImageCard v-for="item in imageCardConfig" :key="item.src" :src="item.src" :title="item.title"
                        :subtitle="item.subtitle" />
                </div> -->
                <Friends />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>