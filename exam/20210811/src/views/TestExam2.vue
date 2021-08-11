<template>
    <button type="button" @click="childFunc" ref="btn">변경하기</button>
</template>
<script>
export default {
    data() {
        return {
            msg : "메세지",
        };
    },
    methods : {
        childFunc() {
            this.msg = "(변경)메세지";
        }
    }
}
</script>