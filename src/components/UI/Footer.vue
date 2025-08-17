<template>
    <div class="loxi_footer">
        <div class="footer_desc">Some days you bloom, some days you grow roots. Both matter.</div>
        <div class="footer_copyright">
            Copyright © LoXi 2024-{{ new Date().getFullYear() }}. All rights reserved.
        </div>
    </div>
</template>

<style scoped>
.loxi_footer {
    padding: 20px;
}

.footer_desc {
    font-size: 14px;
    font-family: 'MonaspaceKryptonVarVF';
}

.footer_copyright {
    opacity: 0.4;
    font-size: 14px;
}
</style>