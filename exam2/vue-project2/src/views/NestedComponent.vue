<template>
    <PageTitle title="부모 컴포넌트 제목1" />
    <page-title title="부모 컴포넌트 제목2" />
</template>
<script>
import PageTitle from "../components/PageTitle2.vue";
export default {
    components : {PageTitle}
}
</script>