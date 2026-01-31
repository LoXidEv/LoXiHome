<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="cosh_worker_main">
        <div class="cosh_worker_image">
            <img src="/img/logo/logo_cosh_dark.svg" class="cosh_worker_logo" alt="COSH Logo">
            <img src="https://avatars.githubusercontent.com/u/110319858?v=4" class="cosh_worker_avatar"
                alt="Member Avatar">
        </div>
        <div class="cosh_worker_info">
            <div>
                <div class="cosh_worker_title">
                    COSH
                </div>
                <div class="cosh_worker_subtitle">
                    COSH 是由三只小动物开发者组成的开发社团，从一行代码到一个世界。我们的成员涵盖了各种编程语言和技术领域，无论你是初学者还是经验丰富的开发者，都能很快的融入我们。
                </div>
            </div>
            <a class="loxi_button" target="_blank" href="https://cosh.work">cosh.work</a>
        </div>
    </div>
</template>

<style scoped>
.cosh_worker_image {
    position: relative;
    min-width: 180px;
}

.cosh_worker_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.cosh_worker_title {
    font-family: 'HooskaiChamferedSquare';
    font-weight: bold;
    font-size: 60px;
    margin-left: -4px;
}

.cosh_worker_subtitle {
    max-width: 400px;
}

.cosh_worker_logo {
    width: 120px;
    z-index: -1;
}

.cosh_worker_avatar {
    position: absolute;
    top: -30px;
    left: 62px;
    z-index: 1;
    width: 100px;
    border: 4px solid var(--text-color);
    border-radius: 8px;
}

.cosh_worker_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 100px 0 0 0;
}

@media screen and (max-width: 520px) {
    .cosh_worker_main {
        flex-wrap: wrap;
    }
}
</style>