<template>
    <PageTitle>회원가입</PageTitle>
    <Form :mode="mode" />
</template>
<script>
import PageTitle from "../../components/PageTitle.vue"
import Form from "../../components/member/Form.vue"
export default {
    components: {PageTitle, Form},
    data() {
        return {
            mode : "join"
        };
    }
}
</script>