<script>
export default {
    data() {
        return {
            Talk: [
                {
                    name: "在这个无人问津的夜，你是否还记得自己曾快乐，快乐地站在山顶呐喊，日出多值得；你是否还记得自己曾失落，失落地望着来往的车，都只是路过",
                    text: "——歌词摘录《湘江中路》"
                },
                {
                    name: "我是这路上，没名字的人；我没有新闻，没有人评论；要拼尽所有，换得普通的剧；曲折辗转，不过谋生",
                    text: "——歌词摘录《无名的人》"
                },
                {
                    name: "有人放烟花，有人追晚风；借一缕时光，捧一片星空",
                    text: "——歌词摘录《世界赠予我的》"
                },
                {
                    name: "南山南，北秋悲，南山有谷堆；南风喃，北海北，北海有墓碑",
                    text: "——歌词摘录《南山南》"
                },
                {
                    name: "空有人间自由身，却非人间自由人",
                    text: "虽未受实际束缚拥有自由，但内心却被世俗责任羁绊束缚感受不到真正自由"
                },
                {
                    name: "聚是一把火，散是满天星",
                    text: "聚到一起犹如熊熊烈火，分散各处犹如漫天繁星"
                },
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
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 8px;
        background-color: var(--card-bg-color);
        border-radius: 8px;
        transition: all 0.5s;

        &:hover {
            transform: scale(1.05);
            background-color: var(--card-bg-color-hover);
        }

        .new_talk_name {
            margin-top: 8px;
            font-size: 20px;
            line-height: 1.2;
            font-weight: bold;
        }

        .new_talk_text {
            font-size: 14px;
            opacity: 0.6;
        }
    }
}
</style>