<script setup>
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="new-not-h">
            <div>
                <div style="color: var(--theme-color-2);">Not Found 404</div>
                <div style="font-size: 15px;">已到达本站边缘，该收手了</div>
            </div>
            <img src="/img/404.png" width="120px" class="animate__animated animate__pulse animate__repeat-3">
        </div>
        <div class="new-notfound">
            <button class="new-not-card" @click="$router.push('/')">
                主页
            </button>
            <button class="new-not-card" @click="$router.go(-1)">
                上一页
            </button>
        </div>
    </div>
</template>

<style>
.new-not-h {
    margin: 5px 0;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.new-not-card {
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
    transition: box-shadow 0.2s;
    transition-timing-function: linear;
    user-select: none;
    -webkit-user-drag: none;
    border: none;
}

.new-not-card:hover {
    box-shadow: 0 0 25px 10px #dbdbdb;
}

.new-notfound {
    margin: 5px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}
</style>