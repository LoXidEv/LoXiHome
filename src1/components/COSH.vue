<script>
export default {

}
</script>

<template>
    <div class="new_cosh animate__animated animate__fadeInDown">
        <a target="_blank" href="https://cosh.work">
            <img src="/img/logo_cosh_dark.svg" class="new_cosh_logo">
            <img src="/img/logo_cosh_light.svg" class="new_cosh_logo">
            <!-- COSH -->
        </a>
    </div>
</template>

<style>
.new_cosh {
    .new_cosh_logo {
        border: var(--card-border-color) 2px solid;
        width: 35px;
        background-color: #ffffffe8;
        padding: 2px;
        border-radius: 5px;
        transition: all 0.5s;
        user-select: none;

        &:hover {
            transform: scale(1.1);
            background-color: var(--card-bg-color);
        }
    }
}
</style>