<script>
import axios from 'axios'

export default {
  data() {
    return {
      hitokoto: 'Σ(⊙▽⊙"啊'
    }
  },
  methods: {
    gethitokoto() {
      axios
        .get('https://v1.hitokoto.cn/?c=k&charset=utf-8')
        .then(({ data }) => {
          this.hitokoto = data.hitokoto
        })
        .catch(console.error)
    }
  },
  mounted() {
    this.gethitokoto()
  }
}
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    {{ hitokoto }}
  </div>
  <div style="font-size: 13px;user-select: none;">
    <small style="opacity: 0.5;user-select: none;">由 Hitokoto 提供一言数据</small>
  </div>
</template>
