<template>
    <input type="number" v-model.number="state.num1" /> + 
    <input type="number" v-model.number="state.num2" /> = 
    {{ state.result }} 
    <br><br>
    <button type="button" @click="msg">클릭!</button>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
    setup() {
        let state = reactive({
            num1 : 0,
            num2 : 0,
            result : computed(() => state.num1 + state.num2 ),
        });

        function msg() {
            alert("메세지 테스트!");
        }

        return {
            state,
            msg,
        }
    }
}
</script>