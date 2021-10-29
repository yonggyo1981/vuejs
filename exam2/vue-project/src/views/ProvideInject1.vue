<template>
    <ProvideInject2 />
</template>
<script>
import ProvideInject2 from "./ProvideInject2.vue";
export default {
    components : {ProvideInject2},
    provide() {
        return {
            greeting : "Hello!"
        };
    }
}
</script>