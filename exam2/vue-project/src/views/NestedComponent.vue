<template>
<PageTitle :title="title" />
<Calculator :num1="10" :num2="20" opr="/" />
<PropsTest :posts="[1,2,3,4]" 
    :blog="{title : blog.title, poster : blog.poster }"
    :checked="true"
/>
<props-test :blog="blog" />
</template>
<script>
import PageTitle from "../components/PageTitle.vue"
import Calculator from "../components/Calculator.vue"
import PropsTest from "../components/PropsTest.vue"
export default {
    components : {PageTitle, Calculator, PropsTest},
    data() {
        return {
            title : "변경된 제목....",
            blog : { title : "(변경)제목", poster : "(변경)작성자"},
        };
    }
}
</script>