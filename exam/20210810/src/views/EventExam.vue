<template>
    <button type="button" v-on:click="counterDown">감소</button>
    <button type="button" v-on:click="counterUp">증가</button>
    <div>{{ counter }}</div>
</template>
<script>
export default {
    data() {
        return {
            counter : 0,
        }
    },
    methods : {
        counterUp() {
            this.counter++;
        },
        counterDown() {
            this.counter--;
        }
    }
}
</script>