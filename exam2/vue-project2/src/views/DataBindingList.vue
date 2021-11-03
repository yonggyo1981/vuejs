<template>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in productList" v-bind:key="index">
               <td>{{ product.product_name }}</td>
               <td>{{ product.price.toLocaleString() }}</td>
               <td>{{ product.category }}</td>
               <td>{{ product.delivery_price.toLocaleString() }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import httpRequest from "../http_request.js";
export default {
    mixins : [httpRequest],
    data() {
        return {
            productList : [],
        };
    },
    async mounted() {
        this.productList = await this.$httpRequest("http://localhost:3000/product");
    }
}
</script>