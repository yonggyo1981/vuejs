<template>
    <div class="container" :class="{'active' : isActive }">클래스 바인딩</div>
    <button type="button" @click="toggle">toggle</button>
    <br>
    <br>
    <div class="container" :class="[addClass1, addClass2]">클래스 바인딩2</div>
</template>
<script>
export default {
    data() {
        return {
            isActive : true,
            addClass1 : "class1",
            addClass2 : "class2",
        };
    },
    methods : {
        toggle() {
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style>
.active {
    background: yellow;
}
</style>