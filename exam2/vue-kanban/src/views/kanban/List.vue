<template>
<PageTitle>작업 목록</PageTitle>
<List status="ready" />
<List status="progress" />
<List status="done" />
</template>
<script>
import PageTitle from "../../components/PageTitle.vue"
import List from "../../components/kanban/List.vue"
export default {
    components : {PageTitle, List},
}
</script>