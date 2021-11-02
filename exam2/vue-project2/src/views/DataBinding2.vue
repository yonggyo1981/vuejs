<template>
    <input type="number" v-model.number="num1" /> + 
    <input type="number" v-model.number="num2" /> = 
    {{ result }} 
    <br><br>
    <button type="button" @click="msg">클릭!</button>
</template>
<script>
import { onMounted, onUnmounted } from 'vue';
import calculator from "../calculator.js";
export default {
    created() {
        console.log("Created!");
    },
    setup() {
        function msg() {
            alert("메세지 테스트!");
        }
        
        onMounted(() => {
            console.log("Mounted!");
        });

        onUnmounted(() => {
            console.log("Unmounted");
        });

        let { num1, num2, result } = calculator();
        return {
            num1,
            num2,
            result,
            msg,
        }
    }
}
</script>