<script>
export default {
    data() {
        return {
            friends: [
                {
                    name: "LeonardoFox",
                    desc: "一个有趣的人",
                    url: "https://leonardofox346.github.io",
                    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=2460329653&spec=640&img_type=jpg"
                }
            ]
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="loxi_title">我的朋友</div>
        <div class="loxi_subtitle">放一些朋友的网站</div>
        <div class="loxi_friends">
            <a v-for="friend in friends" :href="friend.url" target="_blank" class="loxi_friend">
                <img :src="friend.avatar" alt="friend.name" class="loxi_friend_img">
                <div>
                    <div class="loxi_friend_name">{{ friend.name }}</div>
                    <div class="loxi_friend_desc">{{ friend.desc }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.loxi_friend_name{
    font-size: 20px;
    color: var(--theme-color);
    font-weight: bold;
}

.loxi_friend_desc{
    font-size: 14px;
}

.loxi_friend_img{
    width: 70px;
    border-radius: var(--border-radius);
}

.loxi_friends {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.loxi_friend {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    padding: 10px;
    border: 2px var(--theme-color-2) solid;
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    transition: all 0.3s ease-in-out;
}

.loxi_friend:hover {
    border-color: var(--theme-color);
}
</style>
