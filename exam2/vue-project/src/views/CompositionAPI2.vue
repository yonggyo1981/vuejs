<template>
    <input type="text" v-model.number="num1"> + 
    <input type="text" v-model.number="num2"> = 
    {{ result }}
</template>
<script>
//import { reactive, computed, toRefs } from "vue";

import { calculator, func1 } from "../lib/calculator.js";
export default {
    setup() {
        
        let { num1, num2, result } = calculator();
        func1();
        return {
            num1,
            num2,
            result,
        };
    }
}
</script>