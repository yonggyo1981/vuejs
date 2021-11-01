<script>
import commonLib from "../lib/common.js";
export default {
   mixins : [commonLib],
   async mounted() {
    const result = await this.$httpRequest("http://localhost:3000");
    console.log(result);
   }
}
</script>