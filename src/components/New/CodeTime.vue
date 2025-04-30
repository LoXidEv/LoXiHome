<script>
import axios from 'axios'

export default {
    data() {
        return {
            CodeTime: 'Get Code Time',
            CodeTimeID: '24899'
        }
    },
    methods: {
        getcodetime() {
            axios
                .get('https://api.codetime.dev/shield?id=' + this.CodeTimeID)
                .then(({ data }) => {
                    this.CodeTime = data.message.replace('hrs', ' 时').replace('mins', ' 分')
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
    <div class="new_codetime">
        <div class="animate__animated animate__fadeIn" style="font-size: 18px;">
            {{ CodeTime }}
        </div>
        <div style="font-size: 13px;">
            ⏱ 代码时间
            <br>
            <small style="opacity: 0.5;">由 CodeTime 提供实时数据</small>
        </div>
    </div>
</template>

<style>
.new_codetime {
    margin-top: 5px;
    padding: 5px 8px;
    border-radius: 8px;
    width: 170px;
    background-color: var(--card-bg-color);
    /* border: 5px var(--card-border-color) solid; */
    user-select: none;
}
</style>