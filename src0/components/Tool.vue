<script>
export default {
    data() {
        return {
            audio: null,
            isPlaying: false,
            volume: 0.8,
        }
    },
    mounted() {
        this.audio = this.$refs.audioPlayer;
        this.audio.volume = this.volume;
    },
    methods: {
        playAudio() {
            this.audio.play();
            this.isPlaying = true;
        },
        pauseAudio() {
            this.audio.pause();
            this.isPlaying = false;
        },
        increaseVolume() {
            if (this.volume < 1) {
                this.volume = Math.min(1, this.volume + 0.1);
                this.audio.volume = this.volume;
            }
        },
        decreaseVolume() {
            if (this.volume > 0) {
                this.volume = Math.max(0, this.volume - 0.1);
                this.audio.volume = this.volume;
            }
        }
    }
}
</script>

<template>
    <div class="loxi_tool">
        <div class="music_title">Andrew Prahlow - Timber Hearth</div>
        <audio ref="audioPlayer" src="/Andrew Prahlow - Timber Hearth.mp3"></audio>
        <div class="music_controls">
            <button class="loxi_button play_pause_btn" @click="isPlaying ? pauseAudio() : playAudio()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path v-if="!isPlaying"
                        d="M8 8c0-1.1.9-2 2-2 .4 0 .8.1 1.1.3l7 4c.6.3 1 1 1 1.7s-.4 1.4-1 1.7l-7 4c-.3.2-.7.3-1.1.3-1.1 0-2-.9-2-2V6z" />
                    <g v-else>
                        <rect x="6" y="5" width="4" height="14" rx="2" ry="2" />
                        <rect x="14" y="5" width="4" height="14" rx="2" ry="2" />
                    </g>
                </svg>
            </button>
            <div class="volume_controls">
                <button class="loxi_button" @click="decreaseVolume" :disabled="volume <= 0">-</button>
                <span class="volume_display">{{ Math.round(volume * 100) }}%</span>
                <button class="loxi_button" @click="increaseVolume" :disabled="volume >= 1">+</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.music_controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.play_pause_btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.volume_controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.volume_controls button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.volume_display {
    min-width: 40px;
    text-align: center;
}

.loxi_tool {
    height: 100%;
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    padding: 6px 20px;
    font-size: 14px;
    background-color: var(--tool-bg-color);
    backdrop-filter: blur(8px);
    background-image: var(--tool-bg-image);
    background-size: cover;
    background-position: center;
    border-top: 2px solid var(--theme-color-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'MonaspaceKryptonVarVF';
}
</style>
