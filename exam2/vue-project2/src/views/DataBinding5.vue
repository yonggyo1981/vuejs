<template>
    <label>
        <input type="radio" name="type" v-model="checked" :value="odd" checked />{{ odd }}
    </label>
    <label>
        <input type="radio" name="type" v-model="checked" :value="even" />{{ even }}
    </label>
    <button type="button" @click="checkValue">확인!</button>
</template>
<script>
export default {
    data() {
        return {
            checked : "",
            odd : "odd",
            even : "even",
        };
    },
    methods : {
        checkValue() {
            console.log(this.checked);
        }
    }
}
</script>