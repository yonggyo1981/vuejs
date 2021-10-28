<template>
    <button type="button" ref="btn" @click="childMsg()">클릭!</button>
    <input type="text" v-model="msg" />
</template>
<script>
export default {
    data() {
        return {
            msg : "1234",
        };
    },
    methods : {
        childMsg() {
            alert("자식 컴포넌트에서 클릭!");
        }
    }
}
</script>