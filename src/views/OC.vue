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
                <img src="/img/LoXi/LoXi_O_1.webp" alt="LoXi" class="oc_body">
            </div>
            <div class="oc_title">
                介绍
            </div>
            <div class="oc_text">
                &emsp;&emsp;来源于超级动物大逃杀，一只蓝莓味耳朵、爪子的暮光色小狐狸。蓝色的眼睛，身穿一件米白色的上衣，领口和袖口有绿色格子图案，胸前还带有可爱的爪印装饰；脖子上蓝白相间的条纹围巾，为增添了几分温暖氛围；一副白色的圆形眼镜，多了几分知性；头顶一只圆润饱满的橙色橘子，顶部还有一片绿色的叶子，事实上橘子是本体！
            </div>
        </div>
    </div>
</template>

<style scoped>
.oc_title {
    font-size: 24px;
    font-weight: bold;
    color: var(--theme-color);
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

.oc_body {
    max-width: 200px;
    width: 40%;
}

.oc_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.oc_img_fullwidth {
    width: 100%;
    border-radius: var(--border-radius);
}
</style>