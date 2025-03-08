<template>
    <div class="new-contact">
        <a target="_blank" class="new-c-card" href="https://afdian.com/a/loxidev">
            <img src="/img/afdian.svg" width="30px">
            <div class="new-c-a-title">&ensp;Afdian</div>
        </a>
        <a target="_blank" class="new-c-card" href="https://space.bilibili.com/1093209533">
            <img src="/img/Bilibili.svg" width="30px">
            <div class="new-c-b-title">&ensp;Bilibili</div>
        </a>
        <a target="_blank" class="new-c-card" href="mailto:dev@netfox.wiki">
            <img src="/img/email.svg" width="30px">
            <div>&ensp;Email</div>
        </a>
        <a target="_blank" class="new-c-card" href="https://github.com/loxidev">
            <img src="/img/github.svg" width="30px">
            <div>&ensp;Github</div>
        </a>
    </div>
</template>

<style>
@media screen and (max-width: 700px) {
    .new-contact {
        grid-template-columns: 1fr 1fr !important;
    }
}

.new-c-card:hover {
    /* box-shadow: 0 0 20px #c5c5c5; */
    background-color: #f5f5f5d2;
}

.new-contact {
    margin: 5px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}

.new-c-a-title {
    color: #9b74e8;
}

.new-c-b-title {
    color: #24b8f2;
}

.new-c-card {
    padding: 10px;
    border-radius: 5px;
    background-color: var(--card-bg-color);
    /* box-shadow: 0 0 10px #dbdbdb; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    transition-timing-function: linear;
    user-select: none;
    -webkit-user-drag: none;
    text-decoration: none;
    color: #2b3d4f;
}
</style>