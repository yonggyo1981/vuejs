<template>
    <select v-model="selectedValue" @change="checkValue()">
        <option value="서울">서울</option>
        <option value="인천">인천</option>
        <option value="부산">부산</option>
    </select>
    <br>
    <input type="text" @keyup="checkValue2()" v-model="inputValue">
</template>
<script>
export default {
    data() {
        return {
            selectedValue : "인천",
            inputValue : "",
        };
    },
    methods : {
        checkValue() {
            alert(this.selectedValue);
        },
        checkValue2() {
            console.log(this.inputValue);
        }
    }
}
</script>