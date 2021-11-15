<template>
<PageTitle>작업 목록</PageTitle>
<List :status="status1" />
<List :status="status2" />
<List :status="status3" />
</template>
<script>
import PageTitle from "../../components/PageTitle.vue"
import List from "../../components/kanban/List.vue"
export default {
    components : {PageTitle, List},
    data() {
        return {
            status1 : "ready",
            status2 : "progress",
            status3 : "done"
        };
    }
}
</script>