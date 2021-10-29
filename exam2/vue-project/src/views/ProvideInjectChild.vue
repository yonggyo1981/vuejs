<script> 
export default {
    inject: ['greeting'],
    mounted() {
        console.log(this.greeting);
    }
}
</script>