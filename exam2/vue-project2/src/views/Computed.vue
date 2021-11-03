<template>
    <input type="number" v-model.number="num1" /> + 
    <input type="number" v-model.number="num2" /> = 
    {{ result }}
</template>
<script> 
export default {
    data() {
        return {
            num1 : 0,
            num2 : 0,
        };
    },
    computed : {
        result() {
            return this.num1 + this.num2;
        }
    }
}
</script>