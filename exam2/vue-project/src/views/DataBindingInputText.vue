<template>
    <div>
        <input type="text" v-model="valueModel" />
        <br>
        <br>
        <input type="text" v-model.number="numberModel" />
        <button type="button" @click="checkNum()">확인!</button>
        <br>
        <textarea v-model="message"></textarea>
        <br>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valueModel : "대한민국",
            numberModel : 3,
            message: "텍스트 데이터....",
            city : "064",
        };
    },
    methods : {
        checkNum() {
           // console.log(this.numberModel);
            //console.log(typeof this.numberModel);
            console.log(this.city);
        }
    }
}
</script>