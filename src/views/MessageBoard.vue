<script setup>
import { ref, onMounted } from 'vue'
import AV from 'leancloud-storage'
import { leancloudConfig } from '@/config/leancloud.js'

AV.init({
  appId: leancloudConfig.appId,
  appKey: leancloudConfig.appKey,
  serverURL: leancloudConfig.serverURL
})

const messages = ref([])
const loading = ref(false)
const submitting = ref(false)

const form = ref({
  name: '',
  avatar: '',
  content: '',
  socialLink: ''
})

const fetchMessages = async () => {
  loading.value = true
  try {
    const query = new AV.Query('Message')
    query.descending('createdAt')
    query.limit(50)
    const results = await query.find()
    messages.value = results.map(item => ({
      id: item.id,
      name: item.get('name'),
      avatar: item.get('avatar'),
      content: item.get('content'),
      socialLink: item.get('socialLink'),
      createdAt: item.createdAt
    }))
  } catch (error) {
    console.error('获取留言失败:', error)
    alert('获取留言失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// URL验证函数
const isValidUrl = (string) => {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

const submitMessage = async () => {
  if (!form.value.name.trim() || !form.value.content.trim()) {
    alert('请填写 Name 和 Message')
    return
  }

  // 验证头像链接
  if (form.value.avatar.trim() && !isValidUrl(form.value.avatar.trim())) {
    alert('请输入有效的 Avatar Link')
    return
  }

  // 验证社交链接
  if (form.value.socialLink.trim() && !isValidUrl(form.value.socialLink.trim())) {
    alert('请输入有效的 Social Link')
    return
  }

  submitting.value = true
  try {
    const Message = AV.Object.extend('Message')
    const message = new Message()
    message.set('name', form.value.name.trim())
    message.set('avatar', form.value.avatar.trim() || 'https://api.dicebear.com/9.x/shapes/svg')
    message.set('content', form.value.content.trim())
    message.set('socialLink', form.value.socialLink.trim())

    await message.save()

    form.value = {
      name: '',
      avatar: '',
      content: '',
      socialLink: ''
    }

    await fetchMessages()
  } catch (error) {
    console.error('提交留言失败:', error)
    alert('提交留言失败，请稍后重试')
  } finally {
    submitting.value = false
  }
}

const getAvatar = (avatar) => {
  return avatar || 'https://api.dicebear.com/9.x/shapes/svg'
}

onMounted(() => {
  fetchMessages()
})
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <div class="loxi_title">Message Board.</div>
    <div class="loxi_subtitle">在这里留下你的足迹吧～</div>
    <input v-model="form.name" type="text" placeholder="Name" class="form_input" maxlength="20" />
    <input v-model="form.avatar" type="url" placeholder="Avatar Link" class="form_input" />
    <input v-model="form.socialLink" type="url" placeholder="Social Link" class="form_input" />
    <textarea v-model="form.content" placeholder="Message (max 500)" class="form_textarea" rows="4" maxlength="500"></textarea>
    <button @click="submitMessage" :disabled="submitting" class="loxi_button" style="width: 100%;">
      {{ submitting ? 'Loading...' : 'Send' }}
    </button>

    <div class="message_list">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="messages.length === 0" class="empty">
        No messages yet. Be the first to leave a message!
      </div>
      <div v-else>
        <div v-for="message in messages" :key="message.id" class="message_item animate__animated animate__fadeIn"
          :style="{ '--avatar-bg': `url(${getAvatar(message.avatar)})` }">
          <div class="message_header">
            <img :src="getAvatar(message.avatar)" :alt="message.name" class="message_avatar"
              @error="$event.target.src = 'https://api.dicebear.com/9.x/shapes/svg'" />
            <div class="message_info">
              <div class="message_name">
                <span v-if="message.socialLink">
                  <a :href="message.socialLink" target="_blank" class="name_link">
                    {{ message.name }}
                  </a>
                </span>
                <span v-else>{{ message.name }}</span>
              </div>
            </div>
          </div>
          <div class="message_content">{{ message.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form_input,
.form_textarea {
  width: 100%;
  padding: 8px 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form_input:focus,
.form_textarea:focus {
  outline: none;
  border-color: var(--theme-color);
}

.form_textarea {
  resize: vertical;
  min-height: 80px;
}

.char_count {
  text-align: right;
  font-size: 11px;
  margin-top: 3px;
}

.message_list {
  margin-top: 20px;
}

.list_title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: var(--text-color);
}

.loading,
.empty {
  text-align: center;
  padding: 30px 20px;
  opacity: 0.6;
  font-style: italic;
  font-size: 14px;
}

.message_item {
  border-radius: var(--border-radius);
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.message_item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--avatar-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: -1;
}

.message_header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.message_avatar {
  border-radius: var(--border-radius);
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 12px;
  border: 2px solid #fff;
}

.message_info {
  flex: 1;
}

.message_name {
  font-weight: bold;
  font-size: 18px;
  color: var(--text-color);
}

.name_link {
  color: var(--theme-color);
  text-decoration: none;
  transition: opacity 0.3s;
}

.name_link:hover {
  opacity: 0.8;
}

.message_content {
  word-break: break-word;
  font-size: 14px;
  position: relative;
  z-index: 1;
  padding: 8px;
  border-radius: var(--border-radius);
}
</style>