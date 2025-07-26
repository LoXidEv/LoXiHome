<script>
export default {
    data() {
        return {
            Talk: [
                {
                    name: "谁不曾梦想走遍这世界，谁不曾害怕失去那感觉，谁不曾怀疑眼前的一切，谁不曾有过不安的感觉，谁不曾梦想触碰那感觉，谁不曾厌倦麻木的一切，谁不曾有过冲动的感觉。",
                    text: "——歌词摘录《不安》"
                },
                {
                    name: "南山南，北秋悲，南山有谷堆；南风喃，北海北，北海有墓碑",
                    text: "——歌词摘录《南山南》"
                },
                // {
                //     name: "聚是一把火，散是满天星",
                //     text: "聚到一起犹如熊熊烈火，分散各处犹如漫天繁星"
                // },
            ]
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            Talk
            <div style="font-size: 14px;opacity: 0.6;">By LoXi</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>
        <div class="new_talk">
            <div class="new_talk_item" v-for="item in Talk">
                <div class="new_talk_name">{{ item.name }}</div>
                <div class="new_talk_text">{{ item.text ?? '' }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.new_talk {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .new_talk_item {
        border: var(--card-border-color) 2px solid;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 8px;
        background-color: var(--card-bg-color);
        border-radius: 8px;
        transition: all 0.5s;

        &:hover {
            transform: scale(1.02);
            background-color: var(--card-bg-color-hover);
        }

        .new_talk_name {
            /* margin-top: 8px; */
            font-size: 20px;
            /* line-height: 1.5; */
            font-weight: bold;
        }

        .new_talk_text {
            font-size: 14px;
            opacity: 0.6;
        }
    }
}
</style>