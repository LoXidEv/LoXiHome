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
    { class: 'friends_item kyy', src: '/img/friends/animals/kyy.webp', alt: 'KYY' },
    { class: 'friends_item ian', src: '/img/friends/animals/ian.webp', alt: 'Ian' },
    { class: 'friends_item xuan', src: '/img/friends/animals/xuan.webp', alt: 'Xuan' },
    { class: 'friends_item dmy', src: '/img/friends/animals/dmy.webp', alt: 'DMY' },
    { class: 'friends_item mmml', src: '/img/friends/animals/mmml.webp', alt: 'MMML' },
    { class: 'friends_item wz', src: '/img/friends/animals/wz.webp', alt: 'WZ' },
    { class: 'friends_item xc', src: '/img/friends/animals/xc.webp', alt: 'XC' },
    { class: 'friends_item xz', src: '/img/friends/animals/xz.webp', alt: 'XZ' },
    { class: 'friends_item yb', src: '/img/friends/animals/yb.webp', alt: 'YB' },
    { class: 'friends_item chua', src: '/img/friends/animals/chua.webp', alt: 'Chua' },
    { class: 'friends_item lm', src: '/img/friends/animals/lm.webp', alt: 'LM' },
    { class: 'friends_item zzdev', src: '/img/friends/animals/zzdev.webp', alt: 'ZZDEV' },
    { class: 'friends_item blue', src: '/img/friends/animals/blue.webp', alt: 'blue' },
    { class: 'friends_item ym', src: '/img/friends/animals/ym.webp', alt: 'ym' },
    { class: 'friends_item bh', src: '/img/friends/animals/bh.webp', alt: 'bh' },
    { class: 'friends_item verlan', src: '/img/friends/animals/verlan.webp', alt: 'verlan' },
];
</script>

<template>
    <div class="overflow">
        <div class="friends">
            <div class="bgblur">
                <img v-for="(friend, index) in friends" :key="index" :class="friend.class" :src="friend.src"
                    :alt="friend.alt">
            </div>
        </div>
    </div>
</template>

<style scoped>
.overflow {
    transition: all 0.3s;
    overflow-y: hidden;
    width: 100%;
    border-radius: 8px;
}

.friends {
    overflow: hidden;
    transition: all 0.3s;
    position: relative;
    z-index: 1;
    min-width: 1400px;
    background-image: url('/img/friends/th.webp');
    /* background-image: url('https://cosh.work/new/img/star.webp'); */
    height: 380px;
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
        height: 380px;
        backdrop-filter: blur(8px);
    }

    .friends_item {
        position: absolute;
        z-index: 3;
        filter: drop-shadow(0 0 8px var(--theme-color-2-oc));
    }

    .logo {
        top: 80px;
        width: 500px;
        left: 450px;
    }

    .loxi {
        /* z-index: 99; */
        width: 65px;
        bottom: 10px;
        left: 665px;
    }

    .mg {
        z-index: 97;
        width: 65px;
        bottom: 10px;
        left: 755px;
        transform: scaleX(-1);
    }

    .ml {
        z-index: 98;
        width: 80px;
        bottom: 10px;
        left: 580px;
    }

    .xl {
        width: 60px;
        bottom: 10px;
        left: 520px;
        transform: scaleX(-1);
    }

    .cosmo {
        width: 60px;
        bottom: 10px;
        left: 400px;
    }

    .dk {
        width: 50px;
        bottom: 10px;
        left: 885px;
    }

    .lz {
        z-index: 99;
        width: 70px;
        bottom: 10px;
        left: 370px;
    }

    .z0 {
        width: 55px;
        bottom: 10px;
        left: 840px;
    }

    .oiklm {
        width: 60px;
        bottom: 10px;
        left: 630px;
    }

    .qn {
        width: 50px;
        bottom: 10px;
        left: 440px;
    }

    .cat {
        z-index: 97;
        width: 65px;
        bottom: 10px;
        left: 330px;
    }

    .ch {
        z-index: 97;
        width: 65px;
        bottom: 10px;
        left: 1000px;
        transform: scaleX(-1);
    }

    .kk {
        z-index: 99;
        width: 45px;
        bottom: 10px;
        left: 560px;
    }

    .mmz {
        width: 70px;
        bottom: 10px;
        left: 960px;
        transform: scaleX(-1);
    }

    .qe {
        width: 50px;
        bottom: 10px;
        left: 920px;
        transform: scaleX(-1);
    }

    .cml {
        z-index: 99;
        width: 110px;
        bottom: 10px;
        left: 250px;
    }

    .tb {
        z-index: 98;
        width: 65px;
        bottom: 10px;
        left: 790px;
        transform: scaleX(-1);
    }

    .fan {
        z-index: 99;
        width: 70px;
        bottom: 10px;
        left: 1070px;
        transform: scaleX(-1);
    }

    .bin {
        z-index: 97;
        width: 85px;
        bottom: 10px;
        transform: scaleX(-1);
        left: 1035px;
    }

    .kyy {
        width: 55px;
        bottom: 10px;
        left: 180px;
    }

    .xuan {
        width: 50px;
        bottom: 10px;
        left: 220px;
    }

    .ian {
        z-index: 96;
        width: 75px;
        bottom: 10px;
        transform: scaleX(-1);
        left: 1110px;
    }

    .dmy {
        z-index: 95;
        width: 45px;
        bottom: 10px;
        left: 40px;
    }


    .mmml {
        width: 55px;
        bottom: 10px;
        left: 145px;
    }

    .wz {
        width: 50px;
        bottom: 10px;
        left: 1170px;
        transform: scaleX(-1);
    }

    .xc {
        z-index: 94;
        width: 60px;
        bottom: 10px;
        left: 65px;
    }

    .xz {
        width: 52px;
        bottom: 10px;
        left: 110px;
    }

    .yb {
        width: 70px;
        bottom: 10px;
        left: 1200px;
        transform: scaleX(-1);
    }

    .chua {
        z-index: 98;
        width: 60px;
        bottom: 10px;
        left: 1290px;
        transform: scaleX(-1);
    }

    .lm {
        width: 55px;
        bottom: 10px;
        left: 1255px;
        transform: scaleX(-1);
    }

    .zzdev {
        width: 70px;
        bottom: 10px;
        left: 720px;
        transform: scaleX(-1);
    }

    .blue {
        width: 70px;
        bottom: 10px;
        left: 1330px;
        transform: scaleX(-1);
    }

    .ym {
        width: 70px;
        bottom: 10px;
        left: 290px;
    }

    .bh {
        width: 60px;
        bottom: 10px;
        left: 470px;
    }

    .verlan {
        width: 65px;
        bottom: 10px;
        left: -10px;
    }
}
</style>