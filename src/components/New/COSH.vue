<script>
export default {

}
</script>

<template>
    <div class="new_cosh animate__animated animate__headShake">
        <RouterLink target="_blank" href="https://cosh.work">
            <img src="/img/cosh2.png" class="new_cosh_logo">
        </RouterLink>
    </div>
</template>

<style>
.new_cosh {
    .new_cosh_logo {
        width: 50px;
        /* background-color: var(--card-bg-color); */
        padding: 2px;
        border-radius: 5px;
        transition: all 0.5s;
        user-select: none;

        &:hover{
            transform: scale(1.1);
            background-color: var(--card-bg-color-hover);
        }
    }
}

.new_link {
    /* display: flex; */
    /* align-items: center; */
    color: var(--theme-color-1);
    text-decoration: none;
}
</style>