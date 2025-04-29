<template>
    <div class="new_contact">
        <a class="new_contact_item animate__animated animate__headShake" target="_blank"
            href="https://afdian.com/a/loxidev">
            <img src="/img/afdian.svg" style="position: absolute;width: 40px;" class="new_contact_logo">
        </a>
        <a class="new_contact_item animate__animated animate__headShake" target="_blank"
            href="https://space.bilibili.com/1093209533">
            <img src="/img/Bilibili.svg" class="new_contact_logo">
        </a>
        <a target="_blank" class="new_contact_item animate__animated animate__headShake"
            href="https://github.com/loxidev">
            <img src="/img/github.svg" class="new_contact_logo">
        </a>
    </div>
</template>

<style>
.new_contact {
    width: 150px;
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;

    .new_contact_item {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 8px;
        border-radius: 8px;
        background-color: var(--card-bg-color);
        transition: all 0.5s;

        &:hover{
            /* transform: scale(1.1); */
            background-color: var(--card-bg-color-hover);
        }

        .new_contact_logo {
            width: 80%;
        }
    }
}
</style>