<script>
import axios from 'axios';

export default {
    data() {
        return {
            Codetime: ""
        }
    },
    mounted() {
        axios.get("https://api.codetime.dev/v3/users/shield?uid=24899").then(data => {
            this.Codetime = data.data
        })
    }
}
</script>

<template>
    <div class="loxi_codetime">
        <div class="codetime_time">
            {{ Codetime }}
        </div>
        <div class="codetime_desc">由 CodeTime 提供数据追踪支持</div>
        <img src="" alt="" class="codetime_logo">
    </div>
</template>