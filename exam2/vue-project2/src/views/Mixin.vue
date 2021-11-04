<script>
//import mixin from "../mixin.js";
export default {
    //mixins : [mixin],
    created() {
        console.log("Created!");
    },
    mounted() {
        console.log("Mounted!");
        //const result = this.$sum(10, 20);
        //console.log(result);
    },
    unmounted() {
        console.log("Unmounted!");
    }
}
</script>