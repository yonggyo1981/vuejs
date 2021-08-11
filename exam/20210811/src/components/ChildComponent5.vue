<template>
    <button type="button" @click="childFunc" ref="btn">자식 컴포넌트에서 데이터 변경</button>
</template>
<script>
export default {
    data() {
        return {
            msg : '메시지',
        };
    },
    methods : {
        childFunc() {
            this.msg = "(변경)" + this.msg;
        }
    }
}
</script>