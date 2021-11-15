<template>
<PageTitle>작업내용확인</PageTitle>
</template>
<script>
import PageTitle from "../../components/PageTitle.vue"
import kanban from "../../models/kanban.js"
export default {
    components : {PageTitle},
    mixins : [kanban],
    data() {
        return {
            view : {},
        };
    },
    async created() {
        const idx = this.$route.query.idx;
        const result = await this.$get(idx);
        console.log(result);
    }
}
</script>