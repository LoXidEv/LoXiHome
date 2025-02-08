<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            Allrace: 0,
            Allharm: 0,
            Allkill: 0,
        }
    },
    methods: {
        getgamestats() {
            axios
                .get('https://next-api.netfox.wiki/api/v2/GetSARstats?steamid=76561199214149600')
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(console.error)
        }
    },
    mounted() {
        this.getgamestats()
    }
}
</script>

<template>
    <!-- <div style="background-color: #ffffff;border-radius: 5px;">
        <div class="new-game-profile">
            <div class="new-game-bg-profile">
                <div class="new-game-desc animate__animated animate__fadeIn animate__slow">
                    我最喜欢的游戏
                </div>
                <div class="new-game-name animate__animated animate__fadeIn animate__slow animate__delay-1s">
                    <span style="text-shadow: 0 0 40px var(--theme-color-1);color:var(--theme-color-1)">Super</span>
                    Animal<br>
                    <span style="text-shadow: 0 0 40px var(--theme-color-2);color:var(--theme-color-2)">Royale</span>
                </div>
                <div class="new-game-one">好友代码 <span class="code-style">1253883872</span></div>
            </div>
            <img class="new-game-avatar animate__animated animate__fadeInRight animate__slow" src="/img/sar-2.webp">
        </div>
    </div> -->
    <div class="new-info-card">
        <div class="new-game-stats-h">
            <span style="text-shadow: 0 0 40px var(--theme-color-2);color:var(--theme-color-2)">Luoxi</span> 的游戏实时数据
        </div>
        <div class="new-game-stats-item-all">
            <div class="new-game-item">
                <div class="new-g-i-stats">{{ Allrace }}</div>
                <div class="new-g-i-h">总局数</div>
            </div>
            <div class="new-game-item">
                <div class="new-g-i-stats">{{ Allharm }}</div>
                <div class="new-g-i-h">总伤害</div>
            </div>
            <div class="new-game-item">
                <div class="new-g-i-stats">{{ Allkill }}</div>
                <div class="new-g-i-h">总击杀</div>
            </div>
        </div>
        <small style="opacity: 0.5;user-select: none;">
            由 super-animals.netfox.wiki 提供实时数据
        </small>
    </div>
</template>

<style>
.new-game-stats-item-all {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.new-game-stats-h {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

.code-style {
    font-weight: bold;
    border-radius: 5px;
    padding: 0 5px;
    background-color: #eec94eaf;
    user-select: text;
}

@media screen and (max-width: 505px) {
    .new-game-bg-profile {
        border: 1px #e9e9e9b7 solid;
    }
}

.new-game-bg-profile {
    padding: 5px;
    background-color: #ffffffaa;
    border-radius: 10px;
}

.new-game-one {
    margin-top: 30px;
    user-select: none;
}

.new-game-desc {
    margin-left: 2px;
    word-break: keep-all;
    user-select: none;
}

.new-game-name {
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    word-break: keep-all;
    user-select: none;
    text-shadow: 0 0 40px #2b3d4f;
}

.new-game-profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    z-index: 1;
    padding: 0 20px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 10px #dbdbdb;
}

.new-game-avatar {
    position: absolute;
    z-index: -1;
    right: 20px;
    top: 0;
    height: 200px;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-mask-image:
        linear-gradient(to top, transparent 0%, transparent 100%),
        linear-gradient(to right, transparent 5%, #000 35%);
}
</style>