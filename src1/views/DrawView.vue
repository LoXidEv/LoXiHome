<script>
export default {
    data() {
        return {
            Draw: [
                {
                    name: "橘子の由来",
                    link: "/img/LoXi_O.webp",
                    text: "橘子树前，突发奇想的洛溪！"
                },
                {
                    name: "橘子の果断",
                    link: "/img/LoXi_O_4.webp",
                    text: "生死看淡，不服就柑！"
                },
                {
                    name: "橘子の强迫",
                    link: "/img/LoXi_O_5.webp",
                    text: "看什么看，画窝！"
                },
                {
                    name: "橘子の思考",
                    link: "/img/LoXi_O_2.webp",
                    text: "洛溪在思考什么呢？"
                },
                {
                    name: "橘子の正面",
                    link: "/img/LoXi_O_3.webp",
                    text: "洛溪酷酷的！"
                },
                {
                    name: "橘子の学术",
                    link: "/img/LoXi_O_6.webp",
                    text: "如何种橘子？"
                },
            ]
        }
    }
}
</script>

<template>
    <!-- <img src="/img/verlan.webp" alt="Verlan" class="new_draw_verlan-bg animate__animated animate__slideInLeft"></img> -->
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            Art
            <div style="font-size: 14px;opacity: 0.6;">By Verlan</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>
        <div class="new_draw">
            <div class="new_draw_item" v-for="item in Draw">
                <div class="new_draw_img">
                    <img :src="item.link" />
                </div>
                <div style="padding: 8px;">
                    <div class="new_draw_name">{{ item.name }}</div>
                    <div class="new_draw_text">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.new_draw_verlan-bg {
    position: absolute;
    width: 500px;
    top: 40px;
    left: -200px;
    opacity: 0.6;
    filter: blur(4px);
    z-index: -1;
}

.new_title {
    border: var(--card-border-color) 2px solid;
    text-align: center;
    font-size: 28px;
    line-height: 1;
    font-weight: bold;
    background-color: var(--card-bg-color);
    padding: 8px 16px;
    display: inline-block;
    border-radius: 8px;
}

.new_draw {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    /* border: 5px var(--card-bg-color) solid; */
    /* border-radius: 8px; */
    /* padding: 8px; */

    .new_draw_item {
        border: var(--card-border-color) 2px solid;
        /* border: 5px var(--card-bg-color) solid; */
        background-color: var(--card-bg-color);
        border-radius: 8px;
        width: 180px;

        .new_draw_img {
            height: 180px;
            overflow: hidden;
            border-radius: 8px;

            img {
                width: 100%;
                -webkit-user-drag: none;
                transition: all 0.5s;
                filter: blur(4px);

                &:hover {
                    filter: blur(0px);
                    transform: scale(1.1);
                }
            }
        }

        .new_draw_name {
            font-size: 20px;
            font-weight: bold;
        }

        .new_draw_text {
            font-size: 14px;
            opacity: 0.6;
        }
    }
}
</style>