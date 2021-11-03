<template>
    <ChildComponent />
</template>
<script> 
import ChildComponent from "./ChildComponent2.vue";
export default {
    components : {ChildComponent},
    provide() {
        return {
            fruits : ["apple", "orange", "mango"],
        };
    }
}
</script>