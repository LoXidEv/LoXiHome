<script>
export default {
    data() {
        return {
            routeName: [
                {
                    name: 'home',
                    path: '/',
                    text: '洛溪 LoXi',
                },
                {
                    name: 'about',
                    path: '/about_me',
                    text: 'About Me',
                    lockby: 'home',
                }
            ],
            routeConfig: []
        }
    },
    mounted() {
        if (this.$route.name !== 'home') {
            this.routeConfig.push(this.$route.name)
        }
    }
}
</script>

<template>
    <div style="font-family: 'HooskaiChamferedSquare Regular';">
        <RouterLink class="route_name" to="/">{{ routeName[0].text }}</RouterLink>
        <span v-for="item in routeConfig">
            <span> / </span>
            <RouterLink class="route_name" :to="routeName.filter(item1 => item1.name == item)[0].path">{{
                routeName.filter(item1 => item1.name == item)[0].text }}</RouterLink>
        </span>
    </div>
</template>

<style>
.route_name {
    color: var(--theme-color);
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        opacity: 0.8;
    }
}
</style>