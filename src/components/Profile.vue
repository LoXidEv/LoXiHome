<script>
</script>

<template>
    <div class="new_profile_p">
        <div class="new_profile_bg-blur"></div>
        <!-- <img src="/img/chc.webp" class="new_bg"></img> -->
        <div class="new_profile_desc animate__animated animate__fadeIn animate__slow animate__delay-1s">
            Frontend-Developer
            <br>
            Student & COSH Owner
        </div>
        <div class="new_profile_name animate__animated animate__fadeIn">
            LoXi - <span style="color: var(--theme-color-1);">洛</span>
            <span style="color: var(--theme-color-2);">溪</span>
        </div>
        <div class="new_profile_one">「 聚是一把火，散是满天星 」</div>
    </div>
</template>

<style>
.new_profile_p {
    position: relative;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;

    /* .new_bg {
        position: absolute;
        top: -60px;
        left: 60px;
        width: 150px;
        border-radius: 8px;
        opacity: 0.9;
        z-index: -9;
    } */

    .new_profile_bg-blur {
        z-index: -8;
        position: absolute;
        height: 95px;
        top: -5px;
        left: -5px;
        width: 193px;
        padding: 4px 4px 4px 0;
        border-radius: 8px;
        background-color: rgba(255, 255, 255);
        opacity: 0.8;
        filter: blur(8px);
    }

    .new_profile_desc {
        font-size: 12px;
    }

    .new_profile_name {
        font-weight: bold;
        font-size: 30px;
        line-height: 1.2;
    }

    .new_profile_one {
        font-size: 15px;
        margin-left: -8px;
    }
}
</style>