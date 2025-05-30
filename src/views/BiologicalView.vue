<script>
export default {
    data() {
        return {
            Notice: "",
            OneConfig: {
                AA: 30,
                Aa: 40,
                aa: 30,
                Gamete: {
                    A: 0,
                    a: 0,
                },
                Result: [],
                ResultItem: [
                    "AA",
                    "Aa",
                    "aa",
                ],
            }
        }
    },
    methods: {
        OneMath() {
            this.OneConfig.Result = []
            this.Notice = ""

            if (this.FormatNumber(this.OneConfig.AA, this.OneConfig.Aa, this.OneConfig.aa)) {
                this.Notice = this.FormatNumber(this.OneConfig.AA, this.OneConfig.Aa, this.OneConfig.aa)
                return
            }

            const { AA, Aa, aa } = this.PercentMath(this.OneConfig.AA, this.OneConfig.Aa, this.OneConfig.aa)
            // console.log(AA, Aa, aa, this.GameteMath(AA, Aa, aa))
            this.OneConfig.Gamete = this.GameteMath(AA, Aa, aa)
            const AAresult = this.OneConfig.Gamete.A ** 2
            const Aaresult = this.OneConfig.Gamete.A * this.OneConfig.Gamete.a * 2
            const aaresult = this.OneConfig.Gamete.a ** 2

            this.OneConfig.Result = [
                AAresult,
                Aaresult,
                aaresult,
            ]
        },
        GameteMath(AA, Aa, aa) {
            return {
                A: AA + Aa / 2,
                a: aa + Aa / 2,
            }
        },
        FormatNumber(AA, Aa, aa) {
            if (AA <= 0 || Aa <= 0 || aa <= 0) {
                return "Error: Number cannot be negative";
            } else if (AA + Aa + aa > 100) {
                return "Error: Total cannot exceed 100";
            } else if (AA + Aa + aa == 100) {
                return "";
            } else {
                return "Error: Unkown Error"
            }
        },
        PercentMath(AA, Aa, aa) {
            return {
                AA: AA / (AA + Aa + aa),
                Aa: Aa / (AA + Aa + aa),
                aa: aa / (AA + Aa + aa),
            }
        }
    },
}
</script>

<template>
    <div class="animate__animated animate__fadeIn"
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 8px">
        <div class="new_title animate__animated animate__fadeInDown">
            Biological
            <div style="font-size: 14px;margin-top: 5px;opacity: 0.6;">突发奇想的小项目</div>
        </div>
        <RouterLink class="new_router animate__animated animate__fadeInLeft" to="/">
            Back Home
        </RouterLink>
        <div class="new_card animate__animated animate__fadeIn">
            <div class="new_card_title">#1 随机交配计算 [XX%AA XX%Aa XX%aa] *理想</div>
            <div class="biological_input">
                <input type="number" :max="100 - (OneConfig.Aa + OneConfig.aa)" min="0" class="new_input"
                    placeholder="XX%" v-model="OneConfig.AA" />
                <input type="number" :max="100 - (OneConfig.AA + OneConfig.aa)" min="0" class="new_input"
                    placeholder="XX%" v-model="OneConfig.Aa" />
                <input type="number" :max="100 - (OneConfig.AA + OneConfig.Aa)" min="0" class="new_input"
                    placeholder="XX%" v-model="OneConfig.aa" />
            </div>
            <button class="new_router" style="width: 100%;" @click="OneMath">Start</button>
            <div style="margin-top: 8px;" class="new_card animate__animated animate__fadeIn" v-if="Notice">
                {{ Notice }}
            </div>
            <div style="margin-top: 8px;" v-if="OneConfig.Result.length"
                class="new_card animate__animated animate__fadeIn">
                <div class="new_card_title">#1 随机交配计算结果</div>
                <div class="new_card_title">## P:Gamete</div>
                A: {{ ((OneConfig.Gamete.A ?? 0) * 100).toFixed(2) }}% a: {{
                    ((OneConfig.Gamete.a ??
                        0)
                        * 100).toFixed(2) }}%
                <div class="new_card_title">## F1</div>
                <span v-for="(item, index) in OneConfig.ResultItem" :key="index">
                    {{ item }}: {{ ((OneConfig.Result[index] ?? 0) * 100).toFixed(2) }}%
                </span>
            </div>
        </div>
    </div>
</template>

<style>
.biological_input {
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
    gap: 8px;
    margin: 8px 0;
}

.new_input {
    width: 100%;
    border-radius: 8px;
    height: 35px;
    border: var(--card-border-color) 2px solid;
    background-color: var(--card-bg-color);
    transition: background-color 0.3s;
    padding: 0 8px;
    outline: none;
    font-family: 'Poppins SemiBold';
    color: #2b3d4f;

    &:focus {
        background-color: var(--card-bg-color-hover);
    }
}
</style>