<script>
export default {
    data() {
        return {
            Contact: [{
                name: 'QQ',
                link: 'https://qm.qq.com/q/8E0ZD3jt9S',
            },
            {
                name: 'Discord',
                link: 'http://discord.com/users/1007503082600546314',
            }, {
                name: 'GitHub',
                link: 'https://github.com/loxidev',
            }, {
                name: 'Bilibili',
                link: 'https://space.bilibili.com/1093209533',
            }, {
                name: 'Email',
                link: 'mailto:loxidev@cosh.work',
            },]
        }
    },
    methods: {
        To(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<template>
    <div class="loxi_card_main">
        <div class="main_card">

        </div>
        <div style="z-index: 2;">
            <img src="/img/LoXi/LoXi_birthday.webp" alt="Banner" class="loxi_banner">
            <div class="loxi_card_content">
                <img src="https://q.qlogo.cn/headimg_dl?dst_uin=2647130977&spec=640&img_type=jpg"
                    :alt="$t('author.name')" class="profile_avatar">
                <div class="profile_name">{{ $t('author.name') }}</div>
                <div class="profile_desc">{{ $t('author.desc') }}</div>
                <div class="profile_contact">
                    <div class="contact_item">
                        <button target="_blank" style="width: 100%;" @click="To(item.link)" class="loxi_card_button"
                            v-for="item in Contact" :key="item.name">{{
                                item.name }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loxi_card_content {
    color: #ffffff;
    padding: 20px;
    border-radius: var(--border-radius);
    background-color: #3d445785;
    backdrop-filter: blur(10px);
}

.profile_name {
    font-size: 24px;
    font-weight: bold;
}

.profile_desc {
    font-size: 16px;
}

.profile_contact {
    margin-top: 20px;
}

.profile_avatar {
    border-radius: var(--border-radius);
    width: 100px;
    height: 100px;
}

.contact_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.main_card{
    position: absolute;
    z-index: 1;
    background-color: #0000002f;
    width: 100%;
    height: 100%;
}

.loxi_card_main {
    position: relative;
    min-height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/img/LoXi/LoXi_Bg_Color.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.loxi_card_button {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 14px;
    color: #ffffff;

    /* font-weight: bold; */
    font-family: 'Poppins SemiBold';
    background-color: #869dc4;
    padding: 6px 12px;
    border-radius: var(--border-radius);
    border: 2px solid #accbfa;
    transition: all 0.3s;

    &:hover {
        background-color: #accbfa;
        color: #ffffff;
    }

    &:focus {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}
</style>
