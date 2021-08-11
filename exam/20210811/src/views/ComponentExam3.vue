<template>
    <SchoolTitle :title="title" :num="num" />
    <school-title v-bind="schoolData" />
</template>
<script> 
import SchoolTitle from "../components/SchoolTitle2.vue"
export default {
    components : { SchoolTitle },
    data() {
        return {
            title : "변경된 제목",
            num : 30,
            schoolData : {
                title : "제목",
                num : 1,
                num2 : 2,
                num3 : 3,
            }
        }
    }
}
</script>