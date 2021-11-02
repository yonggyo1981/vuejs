<template>
    <textarea v-model="message"></textarea>
    <br>

    <select v-model="city">
        <option value="02">서울</option>
        <option value="032">인천</option>
        <option value="064">제주</option>
    </select>
    <br>
    <label>
        <input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{ checked }}
    </label>
    <br><br>
    <h1>좋아하는 과일은?</h1>
    <label>
        <input type="checkbox" v-model="fruits" value="Apple">Apple
    </label>
    <label>
        <input type="checkbox" v-model="fruits" value="Orange">Orange
    </label>
    <label>
        <input type="checkbox" v-model="fruits" value="Melon">Melon
    </label>
    <button type="button" @click="checkValue">확인</button>
</template>
<script> 
export default {
    data() {
        return {
            fruits : [],
            checked : "yes", // true, no -> false
            message : "textarea에 입력될 문장....",
            city : "032",
        };
    },
    methods : {
        checkValue() {
            console.log(this.fruits);
        }
    }
}
</script>