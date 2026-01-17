<script>
export default {
    data() {
        return {
            texts: [
                "小洛溪正在准备页面",
                "橘熟霜轻浮洛水，溪光映果满庭芳"
            ],
            currentTextIndex: 0,
            currentCharIndex: 0,
            title: "",
            isDeleting: false,
            typingSpeed: 150,
            deletingSpeed: 100,
            delay: 2000,
            timeout: null
        }
    },
    mounted() {
        this.type();
    },
    beforeUnmount() {
        clearTimeout(this.timeout);
    },
    methods: {
        type() {
            const currentText = this.texts[this.currentTextIndex];
            let speed = this.typingSpeed;
            if (this.isDeleting) {
                speed = this.deletingSpeed;
                this.title = currentText.substring(0, this.currentCharIndex - 1);
                this.currentCharIndex--;
            } else {
                this.title = currentText.substring(0, this.currentCharIndex + 1);
                this.currentCharIndex++;
            }
            if (!this.isDeleting && this.currentCharIndex === currentText.length) {
                this.isDeleting = true;
                speed = this.delay;
            } else if (this.isDeleting && this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }

            this.timeout = setTimeout(this.type, speed);
        }
    }
}
</script>

<template>
    <div class="loxi_start">
        <div class="loxi_start_container">
            <img src="/img/LoXi/LoXi_Maple.gif" alt="LoXi Maple" class="start_git">
            <div class="loxi_start_title">
                {{ title }}<span class="cursor">_</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loxi_start_title {
    font-size: 14px;
    opacity: 0.5;
}

.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.loxi_start_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.start_git {
    width: 200px;
    max-width: 100%;
    user-select: none;
}

.loxi_start {
    background-color: #ffffff;
    /* backdrop-filter: blur(10px); */
    color: var(--text-color);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
</style>
