<script setup>
const friends = [
    { class: 'friends_item logo', src: '/img/friends/sar_logo.webp', alt: 'SAR Logo' },
    { class: 'friends_item loxi', src: '/img/friends/animals/lx.webp', alt: 'LoXi' },
    { class: 'friends_item xl', src: '/img/friends/animals/xl.webp', alt: 'Star' },
    { class: 'friends_item ml', src: '/img/friends/animals/ml.webp', alt: 'Raisugeo' },
    { class: 'friends_item mg', src: '/img/friends/animals/mg.webp', alt: 'Mugu' },
    { class: 'friends_item cosmo', src: '/img/friends/animals/cosmo.webp', alt: 'Cosmo' },
    { class: 'friends_item dk', src: '/img/friends/animals/dk.webp', alt: 'DK' },
    { class: 'friends_item lz', src: '/img/friends/animals/lz.webp', alt: 'LZ' },
    { class: 'friends_item oiklm', src: '/img/friends/animals/oiklm.webp', alt: 'Oiklm' },
    { class: 'friends_item z0', src: '/img/friends/animals/z0.webp', alt: 'Z0' },
    { class: 'friends_item qn', src: '/img/friends/animals/qn.webp', alt: 'QN' },
    { class: 'friends_item cat', src: '/img/friends/animals/cat.webp', alt: 'Cat' },
    { class: 'friends_item ch', src: '/img/friends/animals/ch.webp', alt: 'CH' },
    { class: 'friends_item kk', src: '/img/friends/animals/kk.webp', alt: 'KK' },
    { class: 'friends_item mmz', src: '/img/friends/animals/mmz.webp', alt: 'MMZ' },
    { class: 'friends_item qe', src: '/img/friends/animals/qe.webp', alt: 'QE' },
    { class: 'friends_item cml', src: '/img/friends/animals/cml.webp', alt: 'CML' },
    { class: 'friends_item tb', src: '/img/friends/animals/tb.webp', alt: 'TB' },
    { class: 'friends_item fan', src: '/img/friends/animals/fan.webp', alt: 'Fan' },
    { class: 'friends_item bin', src: '/img/friends/animals/bin.webp', alt: 'Bin' },
    { class: 'friends_item bin', src: '/img/friends/animals/bin.webp', alt: 'Bin' },
    { class: 'friends_item kyy', src: '/img/friends/animals/kyy.webp', alt: 'KYY' },
    { class: 'friends_item ian', src: '/img/friends/animals/ian.webp', alt: 'Ian' },
    { class: 'friends_item xuan', src: '/img/friends/animals/xuan.webp', alt: 'Xuan' }
];
</script>

<template>
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            Friends
            <div style="font-size: 14px;opacity: 0.6;">滑动浏览</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>
        <div class="overflow">
            <div class="friends">
                <div class="bgblur">
                    <img v-for="(friend, index) in friends" :key="index" :class="friend.class" :src="friend.src"
                        :alt="friend.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overflow {
    transition: all 0.3s;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 1200px;
    /* border-radius: 8px; */
    /* width: 320px; */
}

@media screen and (max-width: 1210px) {
    .overflow {
        width: 800px;
        overflow-x: scroll;
    }
}

@media screen and (max-width: 810px) {
    .overflow {
        width: 320px;
        overflow-x: scroll;
    }
}

.friends {
    transition: all 0.3s;
    position: relative;
    z-index: 1;
    min-width: 1200px;
    /* background-image: url('/img/friends/th.webp'); */
    background-image: url('https://cosh.work/new/img/star.webp');
    height: 300px;
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
        height: 300px;
        backdrop-filter: blur(8px);
    }

    .friends_item {
        position: absolute;
        z-index: 3;
        filter: drop-shadow(0 0 8px var(--theme-color-2-oc));
    }

    .logo {
        width: 500px;
        left: 350px;
    }

    .loxi {
        /* z-index: 99; */
        width: 65px;
        bottom: 10px;
        left: 565px;
    }

    .mg {
        width: 65px;
        bottom: 10px;
        left: 650px;
        transform: scaleX(-1);
    }

    .ml {
        z-index: 98;
        width: 80px;
        bottom: 10px;
        left: 480px;
    }

    .xl {
        width: 60px;
        bottom: 10px;
        left: 410px;
    }

    .cosmo {
        width: 60px;
        bottom: 10px;
        left: 340px;
    }

    .dk {
        width: 50px;
        bottom: 10px;
        left: 785px;
    }

    .lz {
        z-index: 99;
        width: 70px;
        bottom: 10px;
        left: 300px;
    }

    .z0 {
        width: 55px;
        bottom: 10px;
        left: 740px;
    }

    .oiklm {
        width: 60px;
        bottom: 10px;
        left: 530px;
    }

    .qn {
        width: 50px;
        bottom: 10px;
        left: 380px;
    }

    .cat {
        z-index: 97;
        width: 65px;
        bottom: 10px;
        left: 260px;
    }

    .ch {
        z-index: 97;
        width: 65px;
        bottom: 10px;
        left: 900px;
        transform: scaleX(-1);
    }

    .kk {
        z-index: 99;
        width: 45px;
        bottom: 10px;
        left: 460px;
    }

    .mmz {
        width: 70px;
        bottom: 10px;
        left: 860px;
        transform: scaleX(-1);
    }

    .qe {
        width: 50px;
        bottom: 10px;
        left: 820px;
        transform: scaleX(-1);
    }

    .cml {
        width: 100px;
        bottom: 10px;
        left: 220px;
    }

    .tb {
        width: 65px;
        bottom: 10px;
        left: 690px;
        transform: scaleX(-1);
    }

    .fan {
        z-index: 99;
        width: 70px;
        bottom: 10px;
        left: 970px;
        transform: scaleX(-1);
    }

    .bin {
        z-index: 97;
        width: 85px;
        bottom: 10px;
        transform: scaleX(-1);
        left: 935px;
    }

    .kyy {
        width: 55px;
        bottom: 10px;
        left: 150px;
    }

    .xuan {
        width: 50px;
        bottom: 10px;
        left: 190px;
    }

    .ian {
        z-index: 96;
        width: 80px;
        bottom: 10px;
        transform: scaleX(-1);
        left: 1010px;
    }
}
</style>