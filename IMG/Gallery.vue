<script>
import galleryitem from '@/assets/galleryitem.json'

export default {
    data() {
        return {
            gallery_item: galleryitem.List,
        }
    },
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="gallery-h">
            <div>
                <div style="color: var(--theme-color-2);">Gallery</div>
                <div>画廊
                </div>
                <div style="font-size: 15px;">来点美味洛溪？</div>
            </div>
            <img src="/img/luoxioc/loxi_app_eat.webp" class="gallery-h-img">
        </div>
        <div class="g-main">
            <div v-for="item in gallery_item" class="g-card">
                <img :src="item.ImgSrc" class="g-img animate__animated animate__fadeIn">
                <div class="g-text">
                    <div class="g-text-h">
                        {{ item.Name }}
                    </div>
                    {{ item.Desc }}
                    <div class="g-text-other">
                        作者：{{ item.Author }}
                    </div>
                    <button @click="$router.push('/gallery/' + item.ID)" class="g-button">查看稿件</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.g-button {
    display: block;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: var(--theme-color-2);
    color: #ffffff;
    box-shadow: 0 0 10px var(--theme-color-2);
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    outline: none;
    user-select: none;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 0 20px var(--theme-color-2);
    }

    &:focus {
        background-color: var(--theme-color-2-oc);
        box-shadow: none;
    }
}

.g-text-h {
    font-size: 30px;
    font-weight: bold;
    text-shadow: 0 0 25px var(--text-color);
}

.g-text-other {
    font-size: 12px;
    opacity: 0.8;
}

.g-text {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 250px;
    user-select: none;
    padding: 0 10px;
    transition: all 0.2s;
    background-color: rgba(255, 255, 255, 0.7);
}

.g-img {
    transition: all 0.2s;
    filter: blur(5px);
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
}

.g-main {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (min-width: 800px) {
    .g-main {
        grid-template-columns: repeat(3, 1fr);
    }
}

.g-card {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    word-wrap: break-word;
    margin-bottom: 5px;
}

.gallery-h {
    margin: 5px 0;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    position: relative;
    overflow: hidden;
}

.gallery-h-img {
    position: absolute;
    width: 150px;
    right: 0;
    top: -10px;
    user-select: none;
}
</style>