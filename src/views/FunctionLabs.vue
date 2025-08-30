<script>
export default {
    data() {
        return {
            item1: {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                result: 0,
            },
        }
    },
    methods: {
        item1Calculate() {
            if (this.item1.a == 0 || this.item1.b == 0 || this.item1.c == 0 || this.item1.d == 0) {
                this.item1.result = 0;
                return;
            }
        }
    }
}
</script>

<template>
    <div class="animate__animated animate__fadeIn">
        <div class="loxi_title">Function Labs</div>
        <div class="loxi_subtitle">因为一时冲动写点奇妙代码</div>
        <div class="loxi_functionlabs">
            <div class="functionlabs_item">
                <div class="functionlabs_item_title">
                    # 三角换元求最值
                </div>
                <div class="functionlabs_item_content">
                    公式：(ax)^2+(by)^2 = 1, cx+dy 的最大值
                    <input type="number" v-model="item1.a" class="form_input" placeholder="a(分数请用小数点形式)">
                    <input type="number" v-model="item1.b" class="form_input" placeholder="b(分数请用小数点形式)">
                    <input type="number" v-model="item1.c" class="form_input" placeholder="c(分数请用小数点形式)">
                    <input type="number" v-model="item1.d" class="form_input" placeholder="d(分数请用小数点形式)">
                    {{ item1.result }}
                    <button class="loxi_button" style="width: 100%;" @click="item1Calculate">计算</button>
                </div>
            </div>
        </div>
    </div>
</template>
