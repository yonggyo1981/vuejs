<script> 
import { inject } from 'vue';
export default {
    inject: ['greeting'],
    mounted() {
        console.log(this.greeting);
    },
    setup() {
        const title = inject('title');
        console.log(title);
    }
}
</script>