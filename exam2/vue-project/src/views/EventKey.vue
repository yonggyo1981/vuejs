<template>
<input type="text" v-model="keyValue" @keyup="checkValue">
<br><br>
<input type="text" @keyup.enter="checkEnter()">
<br>
<br>
<input type="text" @keyup.tab="checkTab()">
</template>
<script>
export default {
    data() {
        return {
            keyValue : ''
        };
    },
    methods : {
        checkValue() {
            console.log(this.keyValue);
        },
        checkEnter() {
            console.log("엔터키 입력");
        },
        checkTab() {
            console.log("탭키 입력");
        }
    }
}
</script>