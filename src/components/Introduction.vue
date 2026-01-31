<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="loxi_introduction_main">
        <div class="loxi_introduction_image">
            <img src="/img/LoXi/LoXi_OC.webp" class="loxi_introduction_logo" alt="LoXi OC Logo">
        </div>
        <div class="loxi_introduction_info">
            <div>
                <div class="loxi_introduction_title">
                    LoXi（天冬草）
                </div>
                <div class="loxi_introduction_subtitle">
                    LoXi,天冬草,洛溪。虚构故事：是个总是在图书馆的 天冬大学 计算机系学生。内向安静，总窝在三楼靠窗角落，安静编织属于自己的代码世界。
                </div>
            </div>
            <RouterLink class="loxi_button" to="/oc">Original Character</RouterLink>
            <RouterLink class="loxi_button" to="/contact">Contact me</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.loxi_introduction_image {
    min-width: 180px;
}

.loxi_introduction_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.loxi_introduction_title {
    font-family: 'HooskaiChamferedSquare';
    font-weight: bold;
    font-size: 30px;
    margin-left: -4px;
}

.loxi_introduction_subtitle {
    max-width: 400px;
}

.loxi_introduction_logo {
    width: 260px;
    border-radius: var(--border-radius);
}

.loxi_introduction_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 100px 0;
}

@media screen and (max-width: 520px) {
    .loxi_introduction_main {
        flex-wrap: wrap;
    }
}
</style>