<script>
export default {
    data() {
        return {
            gallery: [
                {
                    src: "LoXi_One.webp",
                    by: "zzdEv"
                },
                {
                    src: "LoXi_avatar.webp",
                    by: "不会Cannot."
                },
                {
                    src: "LoXi_Bg.webp",
                    by: "维兰-ღVerlanღ"
                },
                {
                    src: "LoXi_O_1.webp",
                    by: "生物实验室里的草履虫"
                },
                {
                    src: "LoXi_birthday.webp",
                    by: "阿财acaii."
                },
                {
                    src: "LoXi_Eat.webp",
                    by: "早暮"
                },
                {
                    src: "LoXi_hs.webp",
                    by: "和了个肆"
                },
            ]
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <img src="/img/banner/oc_banner.webp" alt="Loxi" class="loxi_banner" />
        <div class="loxi_title">Original Character.</div>
        <div class="loxi_subtitle">我的原创设定 洛溪 的介绍。</div>
        <!-- <img src="/img/construction.webp" alt="Construction" class="oc_img_fullwidth" /> -->
        <div class="loxi_oc">
            <div class="oc_flex">
                <div class="oc_text">
                    <span>Chinese:</span> 洛溪
                    <br>
                    <span>English:</span> LoXi
                    <br>
                    <span>Gender:</span> ♂
                    <br>
                    <span>Hobby:</span> 代码、睡觉、吃
                    <br>
                    <span>MBIT:</span> INFP
                </div>
                <img src="/img/LoXi/LoXi_Bg_2.webp" alt="LoXi" class="oc_body">
            </div>
            <div class="oc_title">
                介绍
            </div>
            <div class="oc_text">
                &emsp;&emsp;来源于超级动物大逃杀，一只蓝莓味耳朵、爪子的暮光色小狐狸。蓝色的眼睛，身穿一件米白色的上衣，领口和袖口有绿色格子图案，胸前还带有可爱的爪印装饰；脖子上蓝白相间的条纹围巾，为增添了几分温暖氛围；一副白色的圆形眼镜，多了几分知性；头顶一只圆润饱满的橙色橘子，顶部还有一片绿色的叶子，事实上橘子是本体！
            </div>
            <div class="oc_title">
                画廊
            </div>
            <div class="oc_image">
                <div v-for="item in gallery" :key="item.src" class="oc_img_item">
                    <img :src="'/img/LoXi/' + item.src" alt="LoXi" class="oc_img_fullwidth" />
                    <div class="oc_img_by">由 {{ item.by }} 绘制</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.oc_title {
    font-size: 24px;
    font-weight: bold;
    /* color: var(--theme-color); */
    font-family: 'MonaspaceKryptonVarVF';
}

.oc_text span {
    color: var(--theme-color);
    font-family: 'MonaspaceKryptonVarVF';
    font-weight: bold;
}

.oc_text {
    margin: 20px 0;

}

.oc_image {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
}

.oc_body {
    max-width: 200px;
    width: 40%;
}

.oc_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.oc_img_item {
    overflow: hidden;
    position: relative;
    border: 2px solid var(--theme-color-3);
    border-radius: var(--border-radius);
    background-color: var(--theme-color-2);
    transition: height 0.6s;
    height: 200px;

    &:hover {
        height: 700px;
        border: 2px solid var(--theme-color);
    }
}

.oc_img_by {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: var(--background-color-oc);
    /* border-top: 2px solid var(--theme-color-3); */
    backdrop-filter: blur(8px);
    font-weight: bold;
}

.oc_img_fullwidth {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>