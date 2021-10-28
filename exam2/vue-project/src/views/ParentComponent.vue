<template>
<ChildComponent ref="child_component" />
<button type="button" ref="button1" @click="msg()">클릭2</button>
<h1>{{ title }}</h1>
</template>
<script>
import ChildComponent from "./ChildComponent.vue"
export default {
    components : {ChildComponent},
    computed : {
       title() {
           //return this.$refs.child_component.msg;
           console.log(this.$refs.child_component);
           return "";
       }
    },
    mounted() {
        //this.$refs.button1.click();
       // this.$refs.child_component.$refs.btn.click();

        /// this.$refs.child_component --> ChildComponent --> this

        //this.$refs.child_component.childMsg();
        //this.$refs.child_component.msg = "변경 메세지....";
        //console.log(this.$refs.child_component.msg);
    },
    methods : {
        msg() {
            alert("클릭!");
        }
    }
}
</script>