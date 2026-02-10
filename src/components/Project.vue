<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="project_main">
        <div class="project_info">
            <div>
                <div class="project_title">
                    SAR Labo+try
                </div>
                <div class="project_subtitle">
                    全新的 SAR 实时玩家战绩数据查询网站
                </div>
            </div>
            <a class="loxi_button" target="_blank" href="https://sarlab.cosh.work">sarlab.cosh.work</a>
        </div>
        <div class="project_image">
            <img src="/img/logo/sarlab_logo.svg" class="project_logo" alt="SAR Labo+try Logo">
        </div>
    </div>
</template>

<style scoped>
.project_image {
    min-width: 180px;
    text-align: center;
}

.project_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.project_title {
    font-family: 'HooskaiChamferedSquare';
    font-weight: bold;
    font-size: 36px;
    margin-left: -4px;
}

.project_subtitle {
    max-width: 400px;
}

.project_logo {
    width: 120px;
    z-index: -1;
}

.project_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 100px 0;
}

@media screen and (max-width: 520px) {
    .project_main {
        flex-wrap: wrap;
        align-items: flex-start;
        flex-direction: column-reverse;
    }

    .project_logo{
        margin-left: -60px;
    }
}
</style>