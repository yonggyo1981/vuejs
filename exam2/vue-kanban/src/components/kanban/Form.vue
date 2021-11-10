<template>
    <form ref="frmKanban" autocomplete="off" @submit="formSubmit($event)">
        <input type="hidden" name="mode" :value="mode">
        <input type="hidden" name="idx" :value="kanban.idx" v-if="mode != 'add'">
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
        <input type="submit" value="작업등록" v-if="mode == 'add'">
        <input type="submit" value="작업수정" v-else>
    </form>
</template>
<script>
import kanban from "../../models/kanban.js"
export default {
    mixins : [kanban],
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
                    idx : 0,
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
           const formData = new FormData(this.$refs.frmKanban);
           if (this.mode == 'add') { // 작업 추가 
                this.$addWork(formData);
           } else { // 작업 수정 
                this.$editWork(formData);
           }
        }
    }
}
</script>