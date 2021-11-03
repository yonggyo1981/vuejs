<template>
    <ChildComponent ref="child_component" @send-data="receiveData" />
    
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
    components : {ChildComponent},
    mounted() {
       // const child = this.$refs.child_component; 
       // const btn = child.$refs.child_btn;
        //btn.click();
        //console.log(child.message);

        //const btn = this.$refs.button1;
        //btn.style.backgroundColor = "red";
    },
    methods : {
        receiveData(data) {
            console.log("data : ", data);
        }
    }
}
</script>