<script>
export default {
    props: {
        path: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<template>
    <button @click="$router.push(path)" class="button_blur">
        <span class="button_blur_text">{{ text }}</span>
    </button>
</template>

<style scoped>
.button_blur{
    min-width: 100px;
    padding: 4px 10px;
    font-family: 'Poppins SemiBold';
    color: var(--text-color);
    border: 1px solid #f0f0f0;
    border-radius: var(--border-radius);
    background-color: #ffffff99;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
        background-color: #f0f0f0cc;
    }

    &:focus{
        transform: scale(0.95);
    }
}

.button_blur_text{
    font-size: 16px;
}
</style>
