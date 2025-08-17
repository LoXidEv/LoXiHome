<script>
export default {
    data() {
        return {
            navbarLinkConfig: [
                {
                    name: "Home",
                    link: "/",
                },
                {
                    name: "Original Character",
                    link: "/oc"
                },
                {
                    name: "Super Animals Royale",
                    link: "/sar"
                }
            ],
        }
    },

}
</script>

<template>
    <div class="loxi_navbar">
        <RouterLink v-for="item in navbarLinkConfig" :to="item.link"
            :class="'navbar_item ' + (($route.path == item.link) ? 'focus' : '')">
            {{ item.name }}
        </RouterLink>
    </div>
</template>

<style scoped>
.loxi_navbar {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4px;
    text-align: center;
    flex-wrap: wrap;
    /* background-color: var(--theme-color-2); */
    padding: 10px;
}

.navbar_item {
    text-decoration: none;
    font-family: 'MonaspaceKryptonVarVF';
    color: var(--text-color);
    transition: all 0.3s;
    padding: 8px 10px;
    border-radius: var(--border-radius);

    &:hover {
        background-color: var(--theme-color-2);
    }
}

.focus {
    background-color: var(--theme-color-2);
}
</style>