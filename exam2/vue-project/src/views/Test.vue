<template>
    <h1>Test 페이지....</h1>
    <PageTitle />
    <page-title />
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <button type="button" @click="msg();">클릭!</button>
</template>
<script>
import PageTitle from "../components/PageTitle.vue"
export default {
 name : "컴포넌트의 이름(생략가능)",
 components : {PageTitle},
 data() {
     return {
         title : "제목Title"
     };
 },
 setup() {
     // Composition API - vue3
 },
 created() {
    console.log("Created!!");
 },
 mounted() { // HTML이 로딩이 완료 되었을때 
    console.log("mounted!!");
    //this.msg();
 },
 unmounted() { // 페이지를 이동될때 호출
    console.log("unmounted!!");
 },
 methods : {
     msg() {
         console.log(this.title);
         alert(this.title);
     }
 }
}
</script>