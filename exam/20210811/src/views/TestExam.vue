<template>
     <child-component ref="child_component" />
    <button type="button" @click="checkData">변경</button>
</template>
<script>
import ChildComponent from "./TestExam2.vue";
export default {
    components : { ChildComponent },
    computed : {
        msg() {
            return this.$refs.child_component.msg;
        }
    },
    methods : {
        checkData() {
            alert(this.msg);
        }
    }
}
</script>