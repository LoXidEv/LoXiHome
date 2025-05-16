<template>
    <RouterLink class="new_router animate__animated animate__fadeInLeft" style="margin-top: 5px;" to="/draw">
        Art by Verlan
    </RouterLink>
    <RouterLink class="new_router animate__animated animate__fadeInLeft" style="margin-top: 5px;" to="/talk">
        LoXi's Talk
    </RouterLink>
    <!-- <RouterLink class="new_router animate__animated animate__fadeInLeft" style="margin-top: 5px;" to="/projects">
        My Projects
    </RouterLink> -->
</template>

<style>
.new_router {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    text-decoration: none;
    padding: 5px 8px;
    border-radius: 8px;
    border: var(--card-border-color) 2px solid;
    background-color: var(--card-bg-color);
    transition: all 0.5s;
    font-size: 14px;
    width: 170px;

    &:hover {
        /* transform: scale(1.1); */
        background-color: var(--card-bg-color-hover);
    }
}
</style>
