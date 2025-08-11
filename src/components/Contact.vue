<script>
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        },
    },
}
</script>

<template>
    <a :href="link" target="_blank" class="contact_link">{{ text }}</a>
</template>

<style scoped>
.contact_link {
    color: var(--color-text);
    text-decoration: none;
    border: 2px solid #f0f0f0;
    text-align: center;
    border-radius: var(--border-radius);
    background-color: #ffffffd8;
    padding: 5px 10px;
    transition: background-color 0.3s;


    &:hover {
        background-color: #f0f0f0cc;
    }
}
</style>