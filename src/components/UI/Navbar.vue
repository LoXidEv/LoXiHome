<script>
export default {
    data() {
        return {
            navbarLinkConfig: [
                {
                    name: "Home",
                    // link: "/",
                    id: "home"
                },
                // {
                //     name: "Original Character",
                //     link: "/oc"
                // },
                {
                    name: "Super Animals Royale",
                    // link: "/sar"
                    id: "sar"
                },
            ],
        }
    },

}
</script>

<template>
    <div class="loxi_navbar">
        <RouterLink v-for="item in navbarLinkConfig" :to="{ name: item.id }" :class="'navbar_item ' + (($route.name == item.id) ? 'focus' : '')">
            {{ item.name }}
        </RouterLink>
        <RouterLink v-if="$route.name == 'notfound'" :to="{ name: 'notfound' }" :class="'navbar_item ' + (($route.name == 'notfound') ? 'focus' : '') + 'animate__animated animate__fadeIn'">
            404 Not Found
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