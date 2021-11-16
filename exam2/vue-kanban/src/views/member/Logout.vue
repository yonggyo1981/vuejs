<script>
export default {
    created() {
        this.$logOut();
        location.href='/login';
    }
}
</script>