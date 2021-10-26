<template>
    <h1>hello, {{ title }}</h1>
    <h1>{{ htmlString }}</h1>
    <h1 v-html="htmlString"></h1>
</template>
<script>
export default {
    data() {
        return {
            title : 'World',
            htmlString : "<p style='color: red;'>HTML 문구...</p>",
        };
    }
}
</script>