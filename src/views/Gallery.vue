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
    <div class="gallery-container">
        <div v-if="!selectedAlbum" key="albums" class="albums-view animate__animated animate__fadeIn">
            <div class="loxi_title">Gallery.</div>
            <div class="loxi_subtitle">记录生活的美好！</div>
            <div class="albums-grid">
                <div v-for="album in galleryData.albums" :key="album.id" class="album-card" @click="selectAlbum(album)">
                    <div class="album-cover">
                        <img :src="album.cover" :alt="album.title" @error="$event.target.src = '/img/placeholder.jpg'">
                        <div class="album-overlay">
                            <div class="loxi_title">{{ album.title }}</div>
                            <div class="loxi_subtitle">{{ album.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else key="waterfall" class="waterfall-view animate__animated animate__fadeIn">
            <div class="loxi_title">{{ selectedAlbum.title }}</div>
            <div class="loxi_subtitle">{{ selectedAlbum.description }}</div>
            <div class="waterfall-container">
                <div v-for="image in allImages" :key="image.id" class="waterfall-item">
                    <img :src="image.src" :alt="image.title" @error="$event.target.src = '/img/placeholder.jpg'">
                    <div class="image-info">
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
.albums-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.album-card {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    border: 1px solid var(--border-color);
}

.album-cover {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.album-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.album-card:hover .album-cover img {
    transform: scale(1.05);
}

.album-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.9));
    padding: 40px 20px 10px 20px;
    transform: translateY(10px);
    transition: transform 0.3s ease;
}

.album-card:hover .album-overlay {
    transform: translateY(0);
}

.waterfall-view {
    width: 100%;
}

.waterfall-container {
    column-count: 4;
    column-gap: 0;
    padding: 0;
}

.waterfall-item {
    break-inside: avoid;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
}

.waterfall-item img {
    width: 100%;
    height: auto;
    display: block;
}

.waterfall-item .image-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.9));
    padding: 40px 20px 10px 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.waterfall-item:hover .image-info {
    transform: translateY(0);
}

@media (max-width: 1200px) {
    .waterfall-container {
        column-count: 3;
    }
}

@media (max-width: 768px) {
    .albums-grid {
        grid-template-columns: 1fr;
    }

    .waterfall-container {
        column-count: 2;
        column-gap: 0;
        padding: 0;
    }
}

@media (max-width: 480px) {
    .waterfall-container {
        column-count: 1;
        padding: 0;
    }
}
</style>