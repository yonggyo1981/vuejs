<script>
export default {
    data() {
        return {
            msg: '자식 컴포넌트 메세지'
        };
    },
    mounted() {
        this.$emit("send-message2", this.msg);   
    }
}
</script>