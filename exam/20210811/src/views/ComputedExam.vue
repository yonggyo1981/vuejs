<template>
    <h1>{{ fullName }}</h1>
    <button type="button" @click="changeLastName">성 변경</button>
</template>

<script>
export default {
    data() {
        return {
            firstName : "Yonggyo",
            lastName : "Lee",
        }
    },
    computed : {
        fullName() {
            return this.lastName + " " + this.firstName;
        }
    },
    methods : {
        changeLastName() {
            this.lastName = "Kim";
        }
    }
}
</script> 