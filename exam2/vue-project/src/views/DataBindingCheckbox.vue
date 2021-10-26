<template>
    <div>
        <label>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{ checked }}
        </label>

        <br><br>
        <label>
            <input type="checkbox" v-bind:value="checkValue" v-model="checked2"> {{ checkValue }}
        </label>
    </div> 
</template>
<script>
export default {
    data() {
        return {
            checked : "yes",
            checked2 : true,
            checkValue : "체크박스 값",
        };
    }
}
</script>