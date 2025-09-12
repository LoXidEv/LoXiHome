<script setup>
import Sponsor from '@/components/Sponsor.vue';
import { ref } from 'vue'

const contactLinkConfig = ref([{
    name: 'QQ',
    link: 'https://qm.qq.com/q/8E0ZD3jt9S',
    logoFile: '.png',
    logoWidth: 100,
},
{
    name: 'Discord',
    link: 'http://discord.com/users/1007503082600546314',
    logoFile: '.svg',
    logoWidth: 100
}, {
    name: 'GitHub',
    link: 'https://github.com/loxidev',
    logoFile: '.svg',
    logoWidth: 100
}, {
    name: 'Bilibili',
    link: 'https://space.bilibili.com/1093209533',
    logoFile: '.svg',
    logoWidth: 100
}, {
    name: 'Email',
    link: 'mailto:loxidev@cosh.work',
    logoFile: '.svg',
    logoWidth: 100
},])
</script>


<template>
    <div class="animate__animated animate__fadeIn">
        <div class="loxi_title">Contact me.</div>
        <div class="loxi_subtitle">通过下面的联系方式联系我。</div>
        <!-- <img src="/img/construction.webp" alt="Construction" class="oc_img_fullwidth" /> -->
        <Sponsor />
        <a target="_blank" class="contact_card" v-for="item in contactLinkConfig" :href="item.link">
            {{ item.name }}
            <img :src="'/img/logo/' + item.name + item.logoFile" :alt="item.name + ' Logo'" class="card_logo"
                :width="item.logoWidth + 'px'">
        </a>
    </div>
</template>

<style scoped>
.contact_card {
    padding: 20px;
    position: relative;
    border: 2px var(--theme-color-2) solid;
    border-radius: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    margin-top: 8px;
    font-size: 24px;
    font-weight: bold;
    height: 40px;
    overflow: hidden;
    transition: all 0.3s;
    background-color: var(--background-color);

    &:hover {
        color: var(--theme-color);
        background-color: var(--theme-color-2);

        .card_logo {
            transform: scale(1.5);
        }
    }
}

.card_logo {
    transition: all 0.2s;
    position: absolute;
    opacity: 0.2;
    right: 0;
}
</style>