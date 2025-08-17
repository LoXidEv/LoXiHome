<template>
    <div class="cosh_worker_main">
        <div class="cosh_worker_top">
            <div class="cosh_worker_banner">
                <img src="/img/logo_cosh_dark.svg" class="cosh_worker_logo" alt="COSH Logo">
                <div class="cosh_worker_title">
                    COSH
                </div>
                <div class="cosh_worker_subtitle">
                    从一行注释到一个世界
                </div>
                <div>Link: <a class="cosh_link" target="_blank" href="https://cosh.work">cosh.work</a></div>
            </div>
            <img src="https://avatars.githubusercontent.com/u/110319858?v=4" class="cosh_worker_avatar"
                alt="Member Avatar">
        </div>
        <div class="cosh_worker_bottom">
            <div>
                <span class="cosh_worker_span">NAME:</span>
                LoXi
            </div>
            <div>
                <span class="cosh_worker_span">ROLE:</span>
                Frontend-Developer
            </div>
            <div>
                <span class="cosh_worker_span">COSH ID:</span>
                loxidev
            </div>
        </div>
    </div>
</template>

<style scoped>
.cosh_worker_span {
    font-family: 'HooskaiChamferedSquare Regular';
}

.cosh_worker_bottom {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
}

.cosh_link {
    color: #4664b0;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        opacity: 0.8;
    }
}

.cosh_worker_top {
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.cosh_worker_banner {
    display: flex;
    align-items: start;
    flex-direction: column;
}

.cosh_worker_title {
    font-family: 'HooskaiChamferedSquare Regular';
    font-weight: bold;
    font-size: 20px;
    margin-left: -2px;
}

.cosh_worker_subtitle {
    font-size: 14px;
    margin-left: -2px;
}

.cosh_worker_logo {
    width: 40px;
    margin-bottom: 4px;
}

.cosh_worker_avatar {
    width: 120px;
    border-radius: 8px;
}

.cosh_worker_main {
    background-color: #ffffff;
    padding: 10px;
    border: 4px #f0f0f0a2 solid;
    border-radius: 8px;
}
</style>