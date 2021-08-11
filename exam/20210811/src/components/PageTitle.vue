<template>
    <h1>{{ title }}</h1>
    <h2 @click="checkNumType">{{ num }}</h2>
    <h2>{{ bool }}</h2>
</template>

<script>
export default {
    props : {
        title : {
            type : String,
            default : "기본 페이지 제목...",
        },
        num : {
            type : Number,
            default : 0,
        },
        bool : {
            type : Boolean,
            default : true,
        }
    },
    methods : {
        checkNumType() {
            console.log(typeof this.num);
            console.log(typeof this.bool);
        }
    }
}
</script>
