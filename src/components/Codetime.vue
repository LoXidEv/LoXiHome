<script>
import axios from 'axios'

export default {
    data() {
        return {
            CodeTime: '正在获取数据',
            CodeTimeID: '24899'
        }
    },
    methods: {
        getcodetime() {
            axios
                .get('https://api.codetime.dev/shield?id=' + this.CodeTimeID)
                .then(({ data }) => {
                    this.CodeTime = data.message.replace('hrs',' 小时').replace('mins',' 分钟')
                })
                .catch(console.error)
        }
    },
    mounted() {
        this.getcodetime()
    }
}
</script>

<template>
    <div>
        <div style="font-size: 20px;">
            {{ CodeTime }}
        </div>
        <div style="font-size: 13px;user-select: none;">
            ⏱ 代码时间
            <br>
            <small style="opacity: 0.5;user-select: none;">由 CodeTime 提供实时数据</small>
        </div>
    </div>
</template>
