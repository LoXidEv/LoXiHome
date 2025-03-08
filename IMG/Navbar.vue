<script>
</script>

<template>
    <div class="navbar">
        <RouterLink v-if="$route.path !== '/'" to="/" class="navbar-link">主页</RouterLink>
        <RouterLink v-else to="/" class="navbar-link-focus">主页</RouterLink>
        <RouterLink v-if="$route.path !== '/super-oc'" to="/super-oc" class="navbar-link">设定</RouterLink>
        <RouterLink v-else to="/super-oc" class="navbar-link-focus">设定</RouterLink>
        <RouterLink v-if="$route.path !== '/gallery'" to="/gallery" class="navbar-link">画廊</RouterLink>
        <RouterLink v-else to="/gallery" class="navbar-link-focus">画廊</RouterLink>
        <RouterLink v-if="$route.path !== '/info'" to="/info" class="navbar-link">信息</RouterLink>
        <RouterLink v-else to="/info" class="navbar-link-focus">信息</RouterLink>
    </div>
</template>

<style>
/* .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    padding: 5px 0;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dbdbdb;
}

.navbar-link {
    margin: 0 5px;
    text-decoration: none;
    color: #2b3d4f;
    border-radius: 5px;
    padding: 5px 20px;
    transition: background-color 0.3s;
    user-select: none;
}

.navbar-link-focus{
    background-color: #d3d3d38e;
    margin: 0 5px;
    text-decoration: none;
    color: #2b3d4f;
    border-radius: 5px;
    padding: 5px 20px;
    transition: background-color 0.3s;
    user-select: none;
}

.navbar-link:hover{
    background-color: #d3d3d34f;
} */
</style>