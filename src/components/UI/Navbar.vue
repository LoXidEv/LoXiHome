<script>
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/light-mode.js';

export default {
    data() {
        return {
            isDark: false,
            navbarLinkConfig: [
                {
                    name: "Home",
                    id: "home"
                },
                {
                    name: "Original Character",
                    id: "oc"
                },
                // {
                //     name: "Function Labs",
                //     id: "functionlabs"
                // },
                {
                    name: "Message Board",
                    id: "messageboard"
                },
                // {
                //     name: "Gallery",
                //     id: "gallery"
                // },
                {
                    name: "Contact me",
                    id: "contact"
                },
                {
                    name: "Super Animals Royale",
                    id: "sar"
                },
                {
                    name: "Friends",
                    id: "friends"
                },
                {
                    name: "Article",
                    id: "article"
                },
            ],
        }
    },
    mounted() {
        this.isDark = localStorage.getItem("theme") === "dark";
        if (this.isDark) {
            document.getElementById("darkmode").className = "loxi_dark";
        } else {
            document.getElementById("darkmode").className = "loxi_light";
        }
    },
    methods: {
        changeTheme() {
            this.isDark = !this.isDark;
            if (this.isDark) {
                document.getElementById("darkmode").className = "loxi_dark";
                localStorage.setItem("theme", "dark");
            } else {
                document.getElementById("darkmode").className = "loxi_light";
                localStorage.setItem("theme", "light");
            }
            window.dispatchEvent(new CustomEvent('themeChanged', {
                detail: { isDark: this.isDark }
            }));
        }
    },
}
</script>

<template>
    <div class="loxi_navbar_container">
        <div class="loxi_tool">
            <button @click="changeTheme" class="loxi_tool_button">
                <mdui-icon-dark-mode style="font-size: 30px" v-if="!isDark"></mdui-icon-dark-mode>
                <mdui-icon-light-mode style="font-size: 30px" v-else></mdui-icon-light-mode>
            </button>
        </div>
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
.loxi_tool_button {
    border: none;
    text-decoration: none;
    font-family: 'MonaspaceKryptonVarVF';
    background-color: transparent;
    color: var(--text-color);
    transition: all 0.3s ease;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-2);
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95) rotate(180deg);
    }

    mdui-icon-dark-mode,
    mdui-icon-light-mode {
        transition: transform 0.5s ease;
    }

    &:hover mdui-icon-dark-mode,
    &:hover mdui-icon-light-mode {
        transform: rotate(15deg);
    }
}

.loxi_tool {
    padding: 20px;
}

.loxi_navbar_container {
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

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