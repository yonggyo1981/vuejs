<template>
    <form ref="frmKanban" autocomplete="off" @submit="formSubmit($event)">
        <dl>
            <dt>작업구분</dt>
            <dd>
                <label>
                    <input type="radio" name="status" value="ready" v-model="status">
                    준비중
                </label>
                <label>
                    <input type="radio" name="status" value="progress" v-model="status">
                    진행중
                </label>
                <label>
                    <input type="radio" name="status" value="done" v-model="status">
                    완료
                </label>
            </dd>
        </dl>
        <input type="submit" value="작업등록">
    </form>
</template>
<script>
export default {
    data() {
        return {
            status : "",
        };
    },
    methods : {
        formSubmit(e) {
            e.preventDefault();
            console.log(this.status);
        }
    }
}
</script>