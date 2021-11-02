<template>
    <div>
        <input type="text" v-model="textValue" /><br>
        <input type="number" v-model="numberValue" /><br>
        <input type="password" v-model="passwordValue" /><br>

        <input type="text" v-model.number="num1" @keyup="sumValue" /> + 
        <input type="text" v-model.number="num2" @keyup="sumValue" /> = 
        {{ result }}
    </div>
</template>
<script> 
export default {
    data() {
        return {
            textValue : "textValue",
            numberValue : 20,
            passwordValue : "123456",
            num1 : 0,
            num2 : 0,
            result : 0,
        };
    },
    methods : {
        sumValue() {
            console.log(typeof this.num1);
            console.log(typeof this.num2);
            //this.result = Number(this.num1) + Number(this.num2);
           // this.result = parseInt(this.num1) + parseInt(this.num2);
           this.result = this.num1 + this.num2;
        }
    }
}
</script>