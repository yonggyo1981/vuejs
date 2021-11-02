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
    
</template>
<script> 
export default {
    data() {
        return {
            checked : "yes", // true, no -> false
            message : "textarea에 입력될 문장....",
            city : "032",
        };
    }
}
</script>