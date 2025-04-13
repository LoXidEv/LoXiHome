<template>
    <div class="new-profile">
        <div class="new-bg-profile">
            <div class="new-desc animate__animated animate__fadeIn animate__slow animate__delay-1s">
                Student & Frontend-Developer
            </div>
            <div class="new-name animate__animated animate__fadeIn animate__slow">
                LoXi - <span style="color:var(--theme-color-1)">洛</span><span
                    style="color:var(--theme-color-2)">溪</span>
            </div>
            <div class="new-one">「 聚是一把火，散是满天星 」</div>
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

/* .new-bg-profile {
    padding: 5px;
    background-color: #ffffffaa;
    border-radius: 10px;
} */

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
    /* background-color: var(--card-bg-color); */
    border-radius: 8px;
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