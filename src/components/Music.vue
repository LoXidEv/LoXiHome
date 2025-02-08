<script>
import axios from 'axios'

export default {
    data() {
        return {
            MusicTitle: '',
            MusicUrl: '',
        }
    },
    methods: {
        getMusic() {
            axios
                .get('https://music.netfox.wiki/api?server=netease&type=playlist&id=8524070819')
                .then(({ data }) => {
                    this.MusicTitle = data[2].title
                    this.MusicUrl = data[2].url
                })
                .catch(console.error)
        }
    },
    mounted() {
        this.getMusic()
    }
}
</script>

<template>
    <div class="new-music-card">
        <div class="music-title">{{ MusicTitle }}</div>
        <audio controls height="100" width="100">
            <source :src="MusicUrl" type="audio/mpeg">
            <source :src="MusicUrl" type="audio/ogg">
            <embed height="50" width="100" :src="MusicUrl">
        </audio>
    </div>
</template>

<style>
.new-music-card {
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
}
</style>