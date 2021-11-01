<script>
import commonLib from "../lib/common.js";
export default {
   mixins : [commonLib],
   async mounted() {
       //console.log("test");
       console.log(await this.getData());
   },
   methods : {
       async getData() {
           return await this.$httpRequest("http://localhost:3000");
       }
   }
}
</script>