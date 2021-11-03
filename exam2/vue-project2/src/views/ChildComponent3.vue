<script>
export default {
    inject : ['fruits'], // this.fruits
    mounted() {
        console.log(this.fruits);
    }
}
</script>