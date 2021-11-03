<template>
    <h1>v-if</h1>
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1>
    <br><br>
    <h1>v-show</h1>
    <h1 v-show="type == 'A'">A</h1>
    <h1 v-show="type == 'B'">B</h1>
    <h1 v-show="type == 'C'">C</h1>
</template>
<script> 
export default {
    data() {
        return {
            type : 'B',
        };
    }
}
</script>