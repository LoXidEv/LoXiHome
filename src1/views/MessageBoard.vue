<script>
export default {
    data() {
        return {
            messages: [],
            newMessage: {
                name: '',
                content: '',
                time: ''
            }
        }
    },
    methods: {
        async submitMessage() {
            if (!this.newMessage.name || !this.newMessage.content) {
                alert('留下名字与一句话...')
                return
            }

            try {
                const response = await fetch('/api/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.newMessage.name,
                        content: this.newMessage.content
                    })
                });

                const data = await response.json();
                if (response.ok) {
                    this.messages.unshift(data);
                    this.newMessage = {
                        name: '',
                        content: '',
                        time: ''
                    };
                } else {
                    alert(data.error || '提交失败');
                }
            } catch (error) {
                alert('网络错误');
            }
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            One word
            <div style="font-size: 14px;opacity: 0.6;">在世界的边缘，留下一句话</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>

        <div class="new_card">
            <input maxlength="20" v-model="newMessage.name" type="text" placeholder="留下名字" class="new_input">
            <textarea maxlength="50" style="resize: none;height: 150px;" v-model="newMessage.content"
                placeholder="在世界的边缘，留下一句话" class="new_input"></textarea>
            <button @click="submitMessage" class="new_btn">决定留下一句话</button>
        </div>

        <div class="new_talk">
            <div v-if="messages.length == 0" class="new_talk_item">
                <div class="new_talk_name">Hello world</div>
                <div class="new_talk_text">在世界的边缘，留下一句话</div>
            </div>
            <div v-for="message in messages" :key="message.id" class="new_talk_item animate__animated animate__fadeIn">
                <div class="new_talk_name">{{ message.name }}</div>
                <div class="new_talk_text">{{ message.content }}</div>
                <div class="new_talk_time">{{ message.time }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.new_talk_time {
    font-size: 14px;
    opacity: 0.6;
    text-align: right;
}

.new_btn {
    border: var(--card-border-color) 2px solid;
    background-color: var(--card-bg-color);
    border-radius: 8px;
    /* font-size: 18px; */
    height: 40px;
    padding: 8px;
    /* outline: none; */
    color: var(--text-color);
    transition: all 0.5s;
    font-family: 'Poppins Regular';

    &:hover {
        background-color: var(--card-bg-color-hover);
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.5;
    }
}

.new_input {
    border: var(--card-bg-color-hover) 2px solid;
    /* background-color: var(--card-bg-color); */
    background-color: #fff;
    border-radius: 8px;
    font-size: 18px;
    height: 25px;
    padding: 8px;
    outline: none;
    color: var(--text-color);
    transition: all 0.5s;
    font-family: 'Poppins Regular';

    &:focus {
        border: var(--card-border-color) 2px solid;
    }
}

.new_card {
    border: var(--card-border-color) 2px solid;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    background-color: var(--card-bg-color);
    border-radius: 8px;
    /* transition: all 0.5s; */
}
</style>