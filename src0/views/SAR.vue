<script setup lang="ts">
import Friends from '@/components/Friends.vue';

</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <img src="/img/banner/sar_banner.webp" alt="Banner" class="loxi_banner">
        <div class="loxi_title">Super Animals Roayle.</div>
        <div class="loxi_subtitle">超级动物大逃杀，一个给我开发想法的游戏。</div>
        <img class="sar_oc" src="/img/friends/animals/lx.webp" alt="LoXi" />
        <div>
            超级动物大逃杀是一款上帝视角的，由多达 64 只可爱凶残的超级动物参与的多人生存射击游戏。
            <br>
            从狐狸、熊猫、猫咪以及其他嗜血的猛兽之中选择你最喜欢的动物，接着跳伞进入险境重重的野生动物园遗迹，在枪林弹雨和愚蠢的舞蹈之中生存下来。
        </div>
        <br>
        <a target="_blank" href="https://animalroyale.com/" class="loxi_button">官方网站</a>
        <br>
        <br>
        <div class="loxi_title">My friends.</div>
        <div class="loxi_subtitle">来看看我的朋友们。</div>
        <Friends />
    </div>
</template>

<style scoped>
.sar_oc {
    width: 120px;
}
</style>