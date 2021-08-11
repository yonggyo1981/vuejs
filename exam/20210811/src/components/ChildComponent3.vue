<template>
    <ul>
        <li :key='i' v-for="(item, i) in items">
            {{ item }}
        </li>
    </ul>
    <ChildComponent4 />
</template>
<script>
import ChildComponent4 from './ChildComponent4.vue';
export default {
    components : { ChildComponent4 },
    inject: ['items'], // this.items
    mounted() {
        //console.log(this.items);
    }
}
</script>