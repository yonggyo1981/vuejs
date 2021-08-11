<template>
   <button type="button" @click="showMessage()" ref='btn'>클릭</button>
   <ChildComponent ref='child_component' @send-message="sendMessage" />
    {{ title }}
</template>

<script>
import ChildComponent from '../components/ChildComponent2.vue';
export default {
    components : { ChildComponent },
    data() {
        return {
            title : "",
        };
    },
    mounted() {
        //this.$refs.btn.click();
        //console.log(this.$refs.child_component.msg);
        //this.$refs.child_component.showChildMessage();
        //this.$refs.child_component.$refs.child_btn.click();
    },
    methods : {
        showMessage() {
            alert("클릭!");
        },
        sendMessage(data) {
            this.title = data;
        }
    }
}
</script>