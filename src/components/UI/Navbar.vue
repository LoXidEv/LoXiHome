<script>
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/light-mode.js';

export default {
    data() {
        return {
            navbarLinkConfig: [
                {
                    name: "Home",
                    id: "home"
                },
                // {
                //     name: "Original Character",
                //     id: "oc"
                // },
                {
                    name: "Contact me",
                    id: "contact"
                },
            ],
        }
    },
}
</script>

<template>
    <div class="loxi_navbar_container">
        <div class="loxi_navbar">
            <RouterLink v-for="item in navbarLinkConfig" :to="{ name: item.id }"
                :class="'navbar_item ' + (($route.name == item.id) ? 'focus' : '')">
                {{ item.name }}
            </RouterLink>
            <RouterLink v-if="$route.name == 'notfound'" :to="{ name: 'notfound' }"
                :class="'navbar_item ' + (($route.name == 'notfound') ? 'focus' : '')">
                404 Not Found
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.loxi_navbar_container {
    z-index: 9999;
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.loxi_navbar {
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    text-align: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    background-color: var(--background-color-oc);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease;
}

.loxi_navbar:hover {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
    transform: translateY(-2px);
}

.navbar_item {
    text-decoration: none;
    font-family: 'MonaspaceKryptonVarVF';
    color: var(--text-color);
    transition: all 0.3s;
    padding: 6px 8px;
    border-radius: var(--border-radius);

    &:hover {
        color: var(--background-color);
        background-color: var(--theme-color);
    }
}

.focus {
    background-color: var(--theme-color);
    color: var(--background-color);
}
</style>