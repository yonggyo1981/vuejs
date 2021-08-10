<template>
    <input type="text" v-model.number="num1" @keyup='updateResult'>
    +
    <input type="text" v-model.number="num2" @keyup='updateResult'> 
    = 
    <span>{{ result }}</span>
</template>

<script> 
export default {
    data() {
        return {
            num1 : 0,
            num2 : 0,
            result : 0,
        }
    },
    methods : {
        updateResult() {
            this.result = this.num1 + this.num2;
        }
    }
}
</script>