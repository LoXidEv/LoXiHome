<script setup>
import { ref, computed } from 'vue'
import galleryConfig from '@/config/gallery.json'

const galleryData = ref(galleryConfig)

const selectedAlbum = ref(null)

const allImages = computed(() => {
    if (selectedAlbum.value) {
        return selectedAlbum.value.images
    }
    const images = []
    galleryData.value.albums.forEach(album => {
        images.push(...album.images)
    })
    return images
})

const selectAlbum = (album) => {
    selectedAlbum.value = album
}

const backToAlbums = () => {
    selectedAlbum.value = null
}
</script>

<template>
    <div class="gallery_container">
        <div v-if="!selectedAlbum" key="albums" class="albums_view animate__animated animate__fadeIn">
            <div class="loxi_title">Gallery.</div>
            <div class="loxi_subtitle">记录生活的美好！</div>
            <div class="albums_grid">
                <div v-for="album in galleryData.albums" :key="album.id" class="album_card" @click="selectAlbum(album)">
                    <div class="album_cover">
                        <img :src="album.cover" :alt="album.title" @error="$event.target.src = '/img/construction.webp'">
                        <div class="album_overlay">
                            <div class="loxi_title">{{ album.title }}</div>
                            <div class="loxi_subtitle">{{ album.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else key="waterfall" class="waterfall_view animate__animated animate__fadeIn">
            <div class="loxi_title">{{ selectedAlbum.title }}</div>
            <div class="loxi_subtitle">{{ selectedAlbum.description }}</div>
            <div class="waterfall_container">
                <div v-for="image in allImages" :key="image.id" class="waterfall_item">
                    <img :src="image.src" :alt="image.title" @error="$event.target.src = '/img/construction.webp'">
                    <div class="image_info">
                        <div class="loxi_title">{{ image.title }}</div>
                        <div class="loxi_subtitle">{{ image.description }}</div>
                    </div>
                </div>
            </div>
            <br>
            <button style="width: 100%;" class="loxi_button" @click="backToAlbums">
                Back
            </button>
        </div>
    </div>
</template>

<style scoped>
.albums_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.album_card {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    cursor: pointer;
    background: var(--background-color);
    border: 1px solid var(--theme-color-3);
}

.album_cover {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.album_cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.album_card:hover .album_cover img {
    transform: scale(1.05);
}

.album_overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.9));
    padding: 40px 20px 10px 20px;
    transform: translateY(10px);
    transition: transform 0.3s ease;
}

.album_card:hover .album_overlay {
    transform: translateY(0);
}

.waterfall_view {
    width: 100%;
}

.waterfall_container {
    column-count: 4;
    column-gap: 0;
    padding: 0;
}

.waterfall_item {
    break-inside: avoid;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
}

.waterfall_item img {
    width: 100%;
    height: auto;
    display: block;
}

.waterfall_item .image_info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.9));
    padding: 40px 20px 10px 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.waterfall_item:hover .image_info {
    transform: translateY(0);
}

@media (max-width: 1200px) {
    .waterfall_container {
        column-count: 3;
    }
}

@media (max-width: 768px) {
    .albums_grid {
        grid-template-columns: 1fr;
    }

    .waterfall_container {
        column-count: 2;
        column-gap: 0;
        padding: 0;
    }
}

@media (max-width: 480px) {
    .waterfall_container {
        column-count: 1;
        padding: 0;
    }
}
</style>