<template>
    <h1>{{ title }}</h1>
    
</template>
<script>
export default {
    props : {
        title : {
            type : String,
            default : "기본 제목...."
        }
    }
}
</script>