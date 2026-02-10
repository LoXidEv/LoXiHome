<script setup>
import ViewHome from '@/components/ViewHome.vue';
import COSH from '@/components/COSH.vue';
import Project from '@/components/Project.vue';
import Introduction from '@/components/Introduction.vue';
</script>

<template>
    <div class="loxi_page animate__animated animate__fadeIn">
        <ViewHome />
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