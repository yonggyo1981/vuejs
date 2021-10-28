<template>
    <div>Counter No : {{ counter }}</div>
    <button type="button" @click="decreaseCounter()">감소</button>
    <button type="button" @click="increaseCounter()">증가</button>
</template> 
<script>
export default {
    data() {
        return {
            counter : 0,
        };
    },
    methods : {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            if (this.counter > 0) {
                this.counter--;
            }
        }
    }
}
</script>