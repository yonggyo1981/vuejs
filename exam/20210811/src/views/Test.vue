<template>
<table>
    <tr :key='i' v-for="(product, i) in productList">
        <td>{{ product.city }}</td>
        <td>{{ product.sigugun }}</td>
    </tr>
</table>
</template>
<script>
export default {
    data() {
        return {
            productList : [
                { city : "인천", sigugun : "계양구"},
                { city : "인천", sigugun : "서구"},
                { city : "인천", sigugun : "미추홀구"},
            ],
        }
    }
    
}
</script>