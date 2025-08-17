<script setup>
// import CodeTime from '@/components/CodeTime.vue';
import COSH from '@/components/COSH.vue';
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <img src="/img/friends/th.webp" alt="Banner" class="loxi_banner">
        <div class="loxi_title">Hello friend.</div>
        <div class="loxi_subtitle">Welcome to my website!</div>
        <div>
            你好！我是洛溪，英文名 LoXi，开发时常用 LoXidEv，是一名来自中国的学生，计算机开发爱好者。
            <br>
            自 2020 年开启自学之旅以来，我在代码的世界里不断探索成长，如今已积累了不少实践经验。
            <br>
            <br>
            经过不断地改版修改，我做出了自己的个人网站，把经验融汇其中。
            <br>
            同时我和一群志同道合的开发者共同创立了开发社团 <a target="_blank" class="home_link" href="//cosh.work">COSH</a>。
            <br>
            在这里，我们一起碰撞创意、攻克技术难关，陆续开发了许多有趣的项目。
            <br>
            <br>
            <COSH />
            <br>
            对我而言，编程不仅是一行行代码的堆叠，更是将想法变成现实的魔法。
            <br>
            如果你也对技术开发充满热情，或是对我的项目感兴趣，欢迎随时与我交流——毕竟技术的乐趣，从来都值得分享～
        </div>
        <!-- <CodeTime /> -->
    </div>
</template>

<style scoped>
.home_link {
    text-decoration: none;
    color: var(--theme-color);
    transition: all 0.3s;

    &:hover {
        opacity: 0.8;
    }
}
</style>