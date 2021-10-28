<template>
    <h2>제목 : {{ blog.title }}</h2>
    <h3>작성자 : {{ blog.poster }}</h3>
    <h3>{{ checked }}</h3>
</template> 
<script>
export default {
    props : {
        posts : {
            type : Array,
            default() {
                return ["제목1", "제목2"];
            }
        },
        blog : {
            type : Object, 
            default() {
                return { title : "블로그 제목", poster : "작성명" };
            }
        },
        checked : {
            type : Boolean,
            default : false,
        }
    },
    mounted() {
        console.log(this.posts);
    }
}
</script>