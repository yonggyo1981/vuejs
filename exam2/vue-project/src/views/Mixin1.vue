<script>
import commonLib from "../lib/common.js";
export default {
    mixins : [commonLib],
    mounted() {
        const result = this.$sum(20, 30);
        console.log(result);
    }

}
</script>