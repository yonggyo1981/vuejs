<script>
import { inject } from 'vue'; 
export default {
    setup() {
        const title = inject('title');
        console.log(title);
    }
}
</script>