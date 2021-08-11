<template>
    <input type="number" v-model="state.num1" @keyup="sum"> + 
    <input type="number" v-model="state.num2" @keyup="sum"> = 
    {{ state.result }}
</template>
<script> 
import { reactive, computed } from 'vue';
export default {
    setup() {
        const state = reactive({
            num1 : 0,
            num2 : 0,
            result : 0
        });

        function sum() {
            state.result = state.num1 + state.num2;
        }

        return {
            state,
            sum,
        }
    }
}
</script>