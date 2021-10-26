<template>
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">클릭!</button>

        <div v-bind:class="{'active': isActive, 'text-red' : hasError }" @click="toggleClass();">Class 바인딩</div>

        <div v-bind:class="[addClass1, addClass2]">Class 바인딩2</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textValue : '',
            isActive : true,
            hasError : true,
            addClass1 : "addClass1",
            addClass2 : "addClass2",
        };
    },
    methods : {
        toggleClass() {
            this.isActive = this.isActive?false:true;
        }
    }
}
</script>
<style scoped>
    .active {
        background-color: orange;
    }
</style>