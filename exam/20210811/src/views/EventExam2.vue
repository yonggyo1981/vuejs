<template>
    <select v-model="selectedValue" @change="showSelected">
        <option value=''>선택</option>
        <option value='서울'>서울</option>
        <option value='인천'>인천</option>
        <option value='부산'>부산</option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            selectedValue : '',
        };
    },
    methods : {
        showSelected() {
            alert(this.selectedValue);
        }
    }
}
</script>