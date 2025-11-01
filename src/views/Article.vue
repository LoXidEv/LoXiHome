<script>
import articleConfig from '../config/article.json'

export default {
    data() {
        return {
            articleConfig: articleConfig
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="loxi_title">Article</div>
        <div class="loxi_subtitle">无厘头文章，我写的？不知道</div>
        <div>
            <div class="article_item" v-for="item in articleConfig" :key="item.title">
                <div class="article_item_title">
                    {{ item.title }}
                </div>
                <div class="article_item_content">
                    <div v-for="paragraph in item.content" :key="paragraph" class="article_item_paragraph">{{ paragraph
                        }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article_item {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: var(--border-radius);
    border: 2px solid var(--theme-color-3);
    transition: all 0.3s;
    background-color: transparent;

    &:hover {
        border-color: var(--theme-color);
        background-color: var(--theme-color-2);
    }
}

.article_item_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.article_item_paragraph {
    margin-bottom: 10px;
}
</style>