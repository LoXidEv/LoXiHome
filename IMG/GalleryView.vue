<script>
import galleryitem from '@/assets/galleryitem.json'

export default {
    data() {
        return {
            gallery_item: galleryitem.List,
            result: {},
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.result = this.gallery_item.filter(x => x.ID == this.$route.params.id)[0]
        } else {
            this.$router.push('/gallery')
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="gallery-h">
            <div>
                <div style="color: var(--theme-color-2);">Gallery</div>
                <div>画廊 [ID:{{ $route.params.id }}]
                </div>
                <div style="font-size: 15px;">来点美味洛溪？</div>
            </div>
            <img src="/img/luoxioc/loxi_app_eat.webp" class="gallery-h-img">
        </div>
        <button class="new-not-card" style="width: 100%;" @click="$router.push('/gallery')">
            回到画廊
        </button>
        <div class="g-view">
            <div class="g-text-h">
                {{ result.Name }}
            </div>
            {{ result.Desc }}
            <div class="g-text-other">
                作者：{{ result.Author }}
            </div>
            <br>
            <img :src="result.ImgSrc" class="g-view-img animate__animated animate__fadeIn">
        </div>
    </div>
</template>

<style>
.g-view-img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(97, 97, 97, 0.438);
}

.g-view {
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    word-wrap: break-word;
    margin: 5px 0;
}
</style>