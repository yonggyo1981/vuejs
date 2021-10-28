<template>
    <div>
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
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{ product.product_name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.delivery_price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productList : [
                {product_name: "상품1", price : 25000, category : "분류1", delivery_price : 2500 },
                {product_name: "상품2", price : 25000, category : "분류2", delivery_price : 2500 },
                {product_name: "상품3", price : 25000, category : "분류3", delivery_price : 2500 },
                {product_name: "상품4", price : 25000, category : "분류4", delivery_price : 2500 },
            ],
        };
    }
}
</script>