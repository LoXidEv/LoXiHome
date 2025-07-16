<script>
export default {

}
</script>

<template>
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            Friends
            <div style="font-size: 14px;opacity: 0.6;">By SAR</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>
        <div class="friends">
            <div class="bgblur">
                <img class="friends_item logo" src="/img/friends/sar_logo.webp" alt="SAR Logo">
                <img class="friends_item loxi" src="/img/friends/lx.webp" alt="LoXi">
                <img class="friends_item xl" src="/img/friends/xl.webp" alt="Star">
                <img class="friends_item ml" src="/img/friends/ml.webp" alt="Raisugeo">
                <img class="friends_item mg" src="/img/friends/mg.webp" alt="Mugu">
            </div>
        </div>
    </div>
</template>

<style scoped>
.friends {
    position: relative;
    z-index: 1;
    min-width: 600px;
    overflow: hidden;
    background-image: url('https://cosh.work/new/img/star.webp');
    height: 200px;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 var(--text-color);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .bgblur {
        border-radius: 8px;
        position: relative;
        z-index: 2;
        width: 100%;
        height: 200px;
        backdrop-filter: blur(4px);
    }

    .friends_item {
        position: absolute;
        z-index: 3;
        filter: drop-shadow(0 0 8px var(--theme-color-2-oc));
    }

    .logo {
        width: 300px;
        right: 150px;
    }

    .loxi {
        width: 60px;
        bottom: 10px;
        left: 270px;
    }

    .mg {
        width: 60px;
        bottom: 10px;
        left: 330px;
        transform: scaleX(-1);
    }

    .ml {
        width: 80px;
        bottom: 10px;
        left: 210px;
    }

    .xl {
        width: 60px;
        bottom: 10px;
        left: 110px;
    }
}
</style>