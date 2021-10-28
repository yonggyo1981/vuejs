<template>
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else>C</h1>
    <br><br>

    <h1 v-show="type=='A'">A(Show)</h1>
    <h1 v-show="type=='B'">B(Show)</h1>

</template>
<script>
    export default {
        data() {
            return {
                type : 'A',
            };
        }
    }
</script>