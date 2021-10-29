<template>
<ChildComponent @send-data="receiveData" />
</template>
<script>
import ChildComponent from "./ChildComponent2.vue";
export default {
    components : {ChildComponent}, 
    methods : {
        receiveData(data) {
            console.log(data);
        }
    }
}
</script>