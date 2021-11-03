<template>
    <h1>카운트 : {{ count }}</h1>
    <button type="button" @click="increaseCount">증가</button>
    <button type="button" @click="decreaseCount">감소</button>
    <br>
    <br>
    <select v-model="selectedValue" @change="checkValue">
        <option value="서울">서울</option>
        <option value="인천">인천</option>
        <option value="부산">부산</option>
    </select>
    <br>
    <br>
    <input type="text" v-model="textValue" 
        @keyup.up="checkUp"
        @keyup.down="checkDn"
        @keyup="checkTextValue" />
</template>
<script>
export default {
    data() {
        return {
            count : 0,
            selectedValue : "인천",
            textValue : "",
        };
    },
    methods : {
        increaseCount() {
            this.count++;
        },
        decreaseCount() {
            if (this.count > 0) {
                this.count--;
            }
        },
        checkValue() {
            alert(this.selectedValue);
        },
        checkTextValue() {
            console.log(this.textValue);
        },
        checkUp() {
            console.log("UP!");
        },
        checkDn() {
            console.log("Down!");
        }
    }
}
</script>