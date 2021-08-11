<template>
    <ul>
        <li :key='i' v-for="(item, i) in items">
            {{ item }}
        </li>
    </ul>
</template>
<script>
export default {
    inject : ['items'],
    mounted() {
        console.log(this.items);
    }
}
</script>