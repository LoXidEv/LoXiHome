<script>
import axios from 'axios'

export default {
    data() {
        return {
            playlist: [],
            currentIndex: 0,
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            volume: 0.5, // 默认音量80%
            isCollapsed: false // 添加折叠状态变量
        }
    },
    computed: {
        currentSong() {
            return this.playlist[this.currentIndex] || {
                name: '加载中...',
                artist: '',
                url: '',
                pic: ''
            }
        }
    },
    methods: {
        // 获取播放列表数据
        async fetchPlaylist() {
            try {
                const response = await axios.get('https://api.injahow.cn/meting/?type=playlist&id=13721484522')
                this.playlist = response.data
            } catch (error) {
                console.error('获取播放列表失败:', error)
            }
        },
        // 播放控制
        togglePlay() {
            if (this.isPlaying) {
                this.$refs.audioPlayer.pause()
            } else {
                this.$refs.audioPlayer.play()
            }
            this.isPlaying = !this.isPlaying
        },
        nextSong() {
            this.currentIndex = (this.currentIndex + 1) % this.playlist.length
            if (this.isPlaying) {
                this.isPlaying = false
            }
        },
        prevSong() {
            this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length
            if (this.isPlaying) {
                this.isPlaying = false
            }
        },
        // 进度条相关
        onTimeUpdate(e) {
            this.currentTime = e.target.currentTime
        },
        onLoadMetadata(e) {
            this.duration = e.target.duration
            // 设置默认音量
            this.$refs.audioPlayer.volume = this.volume
        },
        onProgressChange(e) {
            const time = e.target.value
            this.currentTime = time
            this.$refs.audioPlayer.currentTime = time
        },
        onEnded() {
            this.nextSong()
        },
        // 时间格式化
        formatTime(time) {
            const minutes = Math.floor(time / 60)
            const seconds = Math.floor(time % 60)
            return `${minutes}:${seconds.toString().padStart(2, '0')}`
        },
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed
        },
    },
    mounted() {
        this.fetchPlaylist()
    }
}
</script>

<template>
    <div class="music-player animate__animated animate__fadeInUp" :class="{ 'collapsed': isCollapsed }">
        <div class="collapse-button" @click="toggleCollapse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2b3d4f">
                <path v-if="isCollapsed" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                <path v-else d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
            </svg>
        </div>

        <div class="player-content" :class="{ 'hidden': isCollapsed }">
            <div class="player-info">
                <img :src="currentSong.pic" :alt="currentSong.name" class="cover-img">
                <div>
                    <div class="song_title">{{ currentSong.name }}</div>
                    <div class="song_author">{{ currentSong.artist }}</div>
                </div>
            </div>
            <div>
                <div class="progress">
                    <div class="progress_info">
                        <span>{{ formatTime(currentTime) }}</span>
                        <span>{{ formatTime(duration) }}</span>
                    </div>
                    <input type="range" :max="duration" :value="currentTime" @input="onProgressChange">
                </div>

                <div class="controls">
                    <button class="new_button" @click="prevSong">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="#2b3d4f">
                            <path
                                d="M6 7c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7zm3.5 5l7.5 5.3c.8.6 2-.1 2-1.2V7.9c0-1.1-1.2-1.8-2-1.2L9.5 12z" />
                        </svg>
                    </button>
                    <button class="new_button" @click="togglePlay">
                        <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="#2b3d4f">
                            <path
                                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#2b3d4f">
                            <path
                                d="M6 5h4c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm8 0h4c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1z" />
                        </svg>
                    </button>
                    <button class="new_button" @click="nextSong">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="#2b3d4f">
                            <path
                                d="M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <audio ref="audioPlayer" :src="currentSong.url" @timeupdate="onTimeUpdate" @loadedmetadata="onLoadMetadata"
            @ended="onEnded"></audio>
    </div>
</template>

<style scoped>
.music-player {
    position: fixed;
    bottom: 10px;
    /* right: 10px; */
    /* display: flex;
    align-items: end; */
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    gap: 8px;
    /* color: var(--text-color); */
    /* text-decoration: none; */
    padding: 5px 8px;
    border-radius: 8px;
    border: var(--card-border-color) 2px solid;
    background-color: var(--card-bg-color);
    /* transition: all 0.5s; */
    /* font-size: 14px; */
    z-index: 1000;
    max-width: 90%;
    transition: all 0.3s ease;
    flex-direction: column;
}

.music-player.collapsed {
    bottom: -5px;
    padding-bottom: 30px;
}

.collapse-button {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    background-color: var(--card-bg-color);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
}

.player-content {
    display: flex;
    width: 100%;
    align-items: end;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    gap: 8px;
    transition: all 0.3s ease;
    overflow: hidden;
    max-height: 500px;
}

.player-content.hidden {
    max-height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
}

.cover-img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 8px;
    -webkit-user-drag: none;
    /* transition: all 0.5s;
    filter: blur(4px);

    &:hover {
        filter: blur(0px);
    } */
}

.song_title {
    line-height: 1.4;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 10ch;
}

.song_author {
    font-size: 12px;
    opacity: 0.5;
}

.controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .new_button {
        display: flex;
        align-items: center;
        justify-content: center;
        /* color: var(--text-color); */
        /* text-decoration: none; */
        padding: 5px 8px;
        width: 50px;
        height: 38px;
        border-radius: 8px;
        border: var(--card-border-color) 2px solid;
        background-color: #ffffff;
        transition: all 0.5s;
        /* font-size: 14px; */
    }
}

.progress {
    /* justify-content: space-between; */

    .progress_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: -6px;
    }

    input {
        width: 100%;
        height: 8px;
        border-radius: 8px;
        background-color: #e4e4e4;
        outline: none;
        appearance: none;
        cursor: pointer;
    }

    input::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: var(--card-border-color) 2px solid;
        background-color: #ffffff;
        cursor: pointer;
    }
}
</style>
