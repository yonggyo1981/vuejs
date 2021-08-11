<template>
    <input type="number" v-model="num1"> + 
    <input type="number" v-model="num2"> = 
    {{ result }}
    <child-component />
</template>
<script> 
import { sumNums } from '../common.js';
import { onMounted, onUnmounted, provide } from 'vue';
import ChildComponent from '../components/ChildComponent6.vue';
export default {
    components : { ChildComponent },
    setup() {
        
        onMounted(() => {
          //  console.log("Mounted");
        });

        onUnmounted(() => {
           // console.log("Unmounted");
        });

        provide("title", "부모 컴포넌트");

        const { num1, num2, result } = sumNums();
        return {
            num1, num2, result
        }
            
    }
}
</script>