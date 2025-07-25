<script>
export default {
    data() {
        return {
            isStart: false
        }
    },
    methods: {
        start() {
            this.isStart = true
        }
    }
}
</script>

<template>
    <div class="loxi_cinema" v-if="!isStart">
        <div class="loxi_cinema_manage">
            <div class="loxi_cinema_manage_title">
                LoXi 影院点播页
            </div>
            <button class="loxi_cinema_manage_button" @click="start">
                开始电影
            </button>
            <!-- <div class="loxi_cinema_manage_content">
                <span>特殊视频列表</span>
            </div> -->
        </div>
    </div>
    <video v-else src="/mp4/1.mp4" controls class="loxi_cinema_manage_video"></video>
</template>

<style scoped>
.loxi_cinema {
    position: relative;
    /* width: 100%; */
    height: 100vh;
    background-image: url('https://cosh.work/new/img/star.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.loxi_cinema_manage {
    width: 100%;
    height: 100vh;
    position: absolute;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
}

.loxi_cinema_manage_title {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}

.loxi_cinema_manage_button {
    color: #fff;
    background-color: rgba(52, 85, 112, 0.5);
    border-radius: 8px;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(52, 85, 112, 0.8);
    }

    &:focus {
        transform: scale(0.95);
    }
}

.loxi_cinema_manage_video {
    width: 100%;
    height: 100vh;
}
</style>