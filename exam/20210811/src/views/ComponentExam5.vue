<template>
    <ChildComponent />
</template>
<script>
import ChildComponent from '../components/ChildComponent3.vue';
export default {
    components : { ChildComponent },
    data() {
        return {
            items : ['apple', 'orange'],
        };
    },
    provide() {
        return {
            items : this.items,
        }
    }
}
</script>