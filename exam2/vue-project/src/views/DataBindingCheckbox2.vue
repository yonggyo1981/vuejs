<template>
    <div>
        <label>
            <input type="checkbox" value="서울" v-model="checked" @click="checkValue();"> 서울
        </label>
        <label>
            <input type="checkbox" value="부산" v-model="checked" @click="checkValue();"> 부산
        </label>
        <label>
            <input type="checkbox" value="제주" v-model="checked" @click="checkValue();"> 제주
        </label>
        <div>{{ checked }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked:[],
        };
    },
    methods : {
        checkValue() {
            console.log(this.checked);
        }
    }
}
</script>