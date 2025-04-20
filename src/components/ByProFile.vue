<template>
    <div class="new-profile">
        <img class="banner animate__animated animate__backInUp animate__slower" src="/img/loxi_oc1_2.webp"
            alt="Banner">
        <div class="new-bg-profile">
            <div class="new-desc animate__animated animate__fadeIn animate__slow animate__delay-2s">
                Student & Frontend-Developer
            </div>
            <div class="new-name animate__animated animate__fadeIn animate__slow">
                LoXi - <span style="color:var(--theme-color-1)">洛</span><span
                    style="color:var(--theme-color-2)">溪</span>
            </div>
            <div class="new-one">「 <span class="animate__animated animate__flash animate__slow">聚是一把火，散是满天星</span> 」</div>
        </div>
        <!-- <img class="new-avatar animate__animated animate__fadeInRight animate__slow"
                src="https://q.qlogo.cn/headimg_dl?dst_uin=2647130977&spec=640&img_type=jpg"> -->
    </div>
</template>

<style>
/* @media screen and (max-width: 765px) {
    .new-bg-profile {
        border: 1px #e9e9e9b7 solid;
    }
} */

.banner {
    position: absolute;
    width: 240px;
    top: 0;
    right: 0;
    -webkit-user-drag: none;
    user-select: none;
    mask-image:
        linear-gradient(to top, transparent 10%, #000 35%);
    -webkit-mask-image:
        linear-gradient(to top, transparent 10%, #000 35%);
}

.new-one {
    margin-left: -8px;
    margin-top: 8px;
    user-select: none;
}

.new-desc {
    /* margin-left: 2px; */
    word-break: keep-all;
    user-select: none;
}

.new-name {
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    word-break: keep-all;
    user-select: none;
    /* text-shadow: 0 0 40px #2b3d4f; */
}

.new-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    /* background-color: var(--card-bg-color); */
    border-radius: 8px;
    height: 170px;
    /* padding: 30px 20px; */
}

/* 
.new-avatar {
    position: absolute;
    z-index: -1;
    right: -50px;
    height: 350px;
    -webkit-user-drag: none;
    user-select: none;
    mask-image:
        linear-gradient(to top, transparent 0%, transparent 100%),
        linear-gradient(to right, transparent 5%, #000 65%);
    -webkit-mask-image:
        linear-gradient(to top, transparent 0%, transparent 100%),
        linear-gradient(to right, transparent 5%, #000 65%);
} */
</style>