<template>
    <h1>{{ title }}</h1>
    <h2 @click="checkType">{{ num }}</h2>
    <h2>{{ num2 }}</h2>
    <h2>{{ num3 }}</h2>
</template>

<script>
export default {
    props : {
        title : {
            type : String,
            default : "기본 제목..."
        },
        num : {
            type : Number,
            default : 10
        },
        num2 : {
            type : Number,
            default : 10
        },
        num3 : {
            type : Number,
            default : 10
        },
    },
    methods : {
        checkType() {
            console.log(typeof this.num);
            console.log(this.num + 200);
        }
    }
}
</script>