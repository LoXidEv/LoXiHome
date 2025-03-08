<script setup>
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <!-- <div class="new-superoc">
            <RouterLink class="new-s-card" to="/super-oc/sar-oc">
                <img src="/img/sar-1.webp" style="padding: 20px;" class="new-o-png" width="100px">
                <div class="new-s-title">洛溪 By SAR</div>
            </RouterLink>
            <RouterLink class="new-s-card" to="/super-oc/furry-oc">
                <img src="/img/furry-oc.webp" class="new-o-png" width="180px" style="padding: 0px;">
                <div class="new-s-title">洛溪 By Furry</div>
            </RouterLink>
        </div> -->
        <div class="new-info-card">
            <div class="new-oc-title">
                <img src="/img/super-oc-game.webp" class="new-oc-img">
                <div>
                    <h2 style="user-select: none;">超级动物设定</h2>
                    <small style="opacity: 0.5;user-select: none;">Powered By Super Animals Royale</small>
                    <br>
                    名称：LoXi
                    <br>
                    物种：猫科
                    <br>
                    种类：灰虎斑猫
                    <br>
                    口味：香草椰子灰
                </div>
            </div>
            <!-- <div class="new-oc-title">
                <div>
                    <h2 style="user-select: none;">周边</h2>
                    <small style="opacity: 0.5;user-select: none;">Powered By Luoxi</small>
                    <br>
                    <RouterLink to="/pet-luoxi" class="button">Pet Luoxi Game</RouterLink>
                </div>
                <img src="/img/Luoxi.webp" class="new-oc-img-luoxi">
            </div> -->
        </div>
        <!-- <div class="List">
            <div class="List-item" v-for="i in [1, 2, 3, 4, 5, 6, 7]">
                <img :src="'/img/luoxioc/luoxi-' + i + '.webp'" />
                <h3 v-html="Title[i - 1]"></h3>
            </div>
        </div> -->
    </div>
</template>

<style>
.TageSAR {
    color: #ffffff;
    background: #4e54c8;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8f94fb, #4e54c8);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 5px;
    padding: 0 5px;
    font-size: 15px;
    font-weight: 400;
    margin-right: 5px;
}

.TageOther {
    color: #ffffff;
    background: linear-gradient(to right, #FFDE52, #FFBB4E);
    background: -webkit-linear-gradient(to right, #FFDE52, #FFBB4E);
    background: #FFDE52;
    border-radius: 5px;
    padding: 0 5px;
    font-size: 15px;
    font-weight: 400;
    margin-right: 5px;
}

@media screen and (max-width: 650px) {
    .List {
        grid-template-columns: 1fr 1fr !important;
    }
}

.List-item {
    position: relative;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    transition: box-shadow 0.2s;
    transition-timing-function: linear;

    h3 {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    img {
        width: 100%;
        -webkit-user-drag: none;
        user-select: none;
        border-radius: 5px;

        mask-image:
            linear-gradient(to top, transparent 0%, transparent 100%),
            linear-gradient(to top, transparent 5%, #000 30%);
        -webkit-mask-image:
            linear-gradient(to top, transparent 0%, transparent 100%),
            linear-gradient(to top, transparent 5%, #000 30%);
    }

    &:hover {
        box-shadow: 0 0 25px 10px #dbdbdb;
    }
}

.List {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 5px;
}

.button {
    display: block;
    text-align: center;
    background-color: var(--theme-color-2);
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.2s;
}

.button:hover {
    background-color: var(--theme-color-2-oc);
}

.new-oc-title {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-around;
    flex-wrap: wrap;
}

.new-oc-img-luoxi {
    width: 150px;
    user-select: none;
    -webkit-user-drag: none;
    mask-image:
        linear-gradient(to top, transparent 0%, transparent 100%),
        linear-gradient(to top, transparent 0%, #000 15%);
    -webkit-mask-image:
        linear-gradient(to top, transparent 0%, transparent 100%),
        linear-gradient(to top, transparent 0%, #000 15%);
}

.new-oc-img {
    width: 120px;
    user-select: none;
    -webkit-user-drag: none;
}

.new-s-title {
    background-color: #f0f0f0;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    margin-top: 10px;
}

/* .new-o-png {
    -webkit-user-drag: none;
    user-select: none;
    -webkit-mask-image:
        linear-gradient(to top, transparent 5%, #000 15%);
} */

.new-superoc {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}

.new-s-card {
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    transition: box-shadow 0.2s;
    transition-timing-function: linear;
    user-select: none;
    -webkit-user-drag: none;
    color: #2b3d4f;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}

.new-s-card:hover {
    box-shadow: 0 0 25px 10px #dbdbdb;
}
</style>