<template>
    //
</template>
<script>
import { onMounted, onUnmounted } from 'vue';
export default {
    created() {
        console.log("Created");
    },
    setup() {
        onMounted(() => {
            console.log("Mounted");
        });

        onUnmounted(() => console.log("Unmounted"));
    }
}
</script>