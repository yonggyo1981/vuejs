<template>
    <h1>{{ state.title }}</h1>
    <button type="button" @click="checkTitle">클릭!</button>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        let state = reactive({
            title : "제목",
        });

        function checkTitle() {
            alert(state.title);
        }

        return {
            state,
            checkTitle,
        };
    }
}
</script>