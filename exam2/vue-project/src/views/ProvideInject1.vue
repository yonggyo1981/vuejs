<template>
    <ProvideInject2 />
</template>
<script>
import ProvideInject2 from "./ProvideInject2.vue";
import { provide } from "vue";
export default {
    components : {ProvideInject2},
    provide() {
        return {
            greeting : "Hello!"
        };
    },
    setup() {
        provide("title", "제목!");
    }
}
</script>