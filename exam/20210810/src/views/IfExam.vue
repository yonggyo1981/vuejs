<template>
    <h1>V-IF</h1>
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else>C</h1>

    <h1>V-SHOW</h1>
    <h1 v-show="type=='A'">A</h1>
    <h1 v-show="type=='B'">B</h1>
    <h1 v-show="toggle1">Toggle1</h1>
    <h1 v-show="toggle2">Toggle2</h1>
</template>

<script>
export default {
    data() {
        return {
            type : 'A',
            toggle1 : false,
            toggle2 : true,
        };
    }
}
</script>