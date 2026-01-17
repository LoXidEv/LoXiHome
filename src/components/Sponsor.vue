<script>
export default {
    methods: {
        ToAdfian() {
            window.open('https://afdian.com/a/loxidev', '_blank')
        }
    }
}
</script>

<template>
    <div class="sponsor_main" @click="ToAdfian">
        <img src="/img/logo/Afdian.svg" class="sponsor_main_icon" alt="Afdian">
        <div class="sponsor_main_title">
            赞助我（们）
        </div>
        您的支持是最大的动力
    </div>
</template>

<style>
.sponsor_main {
    position: relative;
    background-color: #956ce66c;
    color: #956ce6;
    padding: 8px;
    border-radius: var(--border-radius);
    margin-bottom: 20px;
    transition: all 0.3s;
    width: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}

.sponsor_main_title{
    font-size: 20px;
    line-height: 1;
    margin-top: 6px;
    font-weight: bold;
}

.sponsor_main_icon {
    position: absolute;
    bottom: -20px;
    right: -10px;
    width: 120px;
}
</style>