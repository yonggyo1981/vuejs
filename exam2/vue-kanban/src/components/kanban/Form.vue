<template>
    <form ref="frmKanban" autocomplete="off" @submit="formSubmit($event)">
        <input type="hidden" name="mode" :value="mode">
        <dl>
            <dt>작업구분</dt>
            <dd>
                <label>
                    <input type="radio" name="status" value="ready" v-model="picked">
                    준비중
                </label>
                <label>
                    <input type="radio" name="status" value="progress" v-model="picked">
                    진행중
                </label>
                <label>
                    <input type="radio" name="status" value="done" v-model="picked">
                    완료
                </label>
            </dd>
        </dl>
        <dl>
            <dt>작업명</dt>
            <dd>
                <input type="text" name="subject" :value="kanban.subject">
            </dd>
        </dl>
        <dl>
            <dt>작업내용</dt>
            <dd>
                <textarea name="content" :value="kanban.content"></textarea>                
            </dd>
        </dl>
        <input type="submit" value="작업등록">
    </form>
</template>
<script>
export default {
    data() {
        return {
            picked : "ready",
        };
    },
    mounted() {
        this.picked = this.kanban.status;
    },
    props : {
        mode : {
            type : String,
            default : "add",
        },
        kanban : {
            type : Object,
            default() {
                return {
                    status : "ready",
                    subject : "",
                    content : "",
                };
            }
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