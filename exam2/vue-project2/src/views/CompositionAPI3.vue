<template>
    <ChildComponent />
</template>
<script>
import ChildComponent from "./ChildComponent4.vue";
import { onMounted, onUnmounted, provide } from 'vue';
export default {
    components : {ChildComponent},
    created() {
        console.log("CREATED!");
    },
    setup() {
        provide("title", "제목!...");

        onMounted(() => {
            console.log("MOUNTED!");
        });

        onUnmounted(() => {
            console.log("UNMOUNTED!");
        });
    }
}
</script>