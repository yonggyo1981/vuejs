<template>
   <PageTitle />
   <page-title />
   <h1>{{ title }}</h1>
   <input type="text" v-model="title">
   <button type="button" @click="checkValue();">확인!</button>
</template>

<script>
import PageTitle from "../components/PageTitle.vue"
export default {
    name : "컴포넌트 이름(생략)",
    components : {PageTitle},
    data() {
        return {
            title : "제목title",
        }
    },
    created() {
        console.log("CREATED!")
    },
    mounted() {
        console.log("Mounted!");
    },
    unmounted() {
        console.log("Unmounted!");
    },
    methods : {
        checkValue() {
            console.log(this.title);
        }
    }
}
</script>