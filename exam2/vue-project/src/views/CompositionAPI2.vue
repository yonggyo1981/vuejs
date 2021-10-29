<template>
    <input type="text" v-model.number="num1"> + 
    <input type="text" v-model.number="num2"> = 
    {{ result }}
</template>
<script>
import { reactive, computed, toRefs } from "vue";

function calculator() {
    let state = reactive({
         num1 : 0,
         num2 : 0,
        result : computed(() => state.num1 + state.num2),
    });

    return toRefs(state);
}

export default {
    setup() {
        
        let { num1, num2, result } = calculator();
        
        return {
            num1,
            num2,
            result,
        };
    }
}
</script>