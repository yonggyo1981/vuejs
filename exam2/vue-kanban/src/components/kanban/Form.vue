<template>
    <form ref="frmKanban" autocomplete="off" @submit="formSubmit($event)">
        <input type="hidden" name="mode" :value="mode">
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
        <dl>
            <dt>작업명</dt>
            <dd>
                <input type="text" name="subject" :value="subject">
            </dd>
        </dl>
        <dl>
            <dt>작업내용</dt>
            <dd>
                <textarea name="content" :value="content"></textarea>                
            </dd>
        </dl>
        <input type="submit" value="작업등록">
    </form>
</template>
<script>
export default {
    data() {
        return {
            status : "ready",
        };
    },
    props : {
        mode : {
            type : String,
            default : "add",
        },
        subject : {
            type : String,
        },
        content : {
            type : String,
        }
    },
    methods : {
        formSubmit(e) {
            e.preventDefault();
            console.log(this.status);
        }
    }
}
</script>