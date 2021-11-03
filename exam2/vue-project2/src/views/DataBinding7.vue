<template>
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue==''">클릭!</button>
</template>
<script>
export default {
    data() {
        return {
            textValue : "",
        };
    }
}
</script>