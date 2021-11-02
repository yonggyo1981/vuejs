<template>
    {{ htmlString }}
    <div v-html="htmlString"></div>

</template>
<script>
export default {
    data() {
        return {
            htmlString : "<p style='color: red;'>HTML으로 작성한 문장</p>"
        };
    }
}
</script>