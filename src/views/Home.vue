<script setup>
import COSH from '@/components/COSH.vue';
import Project from '@/components/Project.vue';
import Introduction from '@/components/Introduction.vue';
</script>

<template>
    <div class="loxi_page animate__animated animate__fadeIn">
        <div class="loxi_title">Hello friend.</div>
        <div class="loxi_subtitle">欢迎来到我的网站！</div>
        <div>
            <Introduction />
            <Project />
            <COSH />
        </div>
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