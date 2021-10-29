<template>
    //
</template>
<script>
export default {
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    }
}
</script>