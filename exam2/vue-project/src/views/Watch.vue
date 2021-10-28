<template>
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeName()">변경</button>
</template>
<script> 
export default {
    data() {
        return {
            firstName : "이름",
            lastName : "성",
            fullName : "",
        };
    },
    /*
    computed : {
        fullName() {
            return this.lastName + " " + this.firstName;
        }
    }
    */
    watch : {
        firstName() {
            this.fullName = this.lastName + " " + this.firstName;
        },
        lastName() {
            this.fullName = this.lastName + " " + this.firstName;
        }
    },
    methods : {
        changeName() {
            this.firstName = "(변경)이름";
        }
    }
}
</script>