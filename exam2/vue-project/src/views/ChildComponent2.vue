<script>
export default {
    data() {
        return {
            posts : { idx : 1, title : "제목!", poster : "글쓴이" }
        };
    },
    mounted() {
        this.$emit("send-data", this.posts);
    }
}
</script>