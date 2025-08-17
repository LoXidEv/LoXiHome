<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<template>
    <div class="image_card">
        <img :src="src" :alt="src" class="image_card_img">
        <!-- <div class="image_card_content">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
        </div> -->
    </div>
</template>

<style scoped>
.image_card_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image_card {
    height: 300px;
    overflow: hidden;
    width: 100%;
    border: 2px solid #f0f0f0;
    border-radius: var(--border-radius);
    background-color: #ffffff99;
}
</style>