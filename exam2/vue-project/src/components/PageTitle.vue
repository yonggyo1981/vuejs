<template>
    <h2>{{ title }}</h2>
</template>
<script>
export default {
    props : {
        title : {
            type : String,
            default : "기본 페이지 제목...",
        }
    }
}
</script>