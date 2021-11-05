<template>
<form ref="frmMember" method="post" autocomplete='off' @submit="formSubmit($event)">
    <input type="hidden" name="mode" :value="mode">
    <input type="text" name="memId" placeholder='아이디' :value="member.memId" v-if="mode == 'join'">
    <div v-else>아이디 : {{ member.memId }}</div>
    <br>          
    <input type="password" name="memPw" placeholder='비밀번호'><br>        
    <input type="password" name="memPwRe" placeholder='비밀번호확인'><br>
    <input type="text" name="memNm" placeholder='회원명' :value="member.memNm"><br>
    <input type="text" name="cellPhone" placeholder="휴대전화번호" :value="member.cellPhone"><br>
    <input type="submit" value="가입하기" v-if="mode == 'join'">
    <input type="submit" value="수정하기" v-else>
</form>
</template>
<script>
import member from "../../models/member.js"
export default {
    mixins : [member],
    props : {
        mode : {
            type : String,
            default : "join"
        },
        member : {
            type : Object,
            default() {
                return {
                    memId : "",
                    memNm : "",
                    cellPhone : ""
                };
            }
        }
    },
    methods : {
        formSubmit(e) {
            e.preventDefault();
            const formData = new FormData(this.$refs.frmMember);
            if (this.mode == 'join') {  // 회원 가입 
                this.$join(formData);
            } else { // 회원 정보 수정
                this.$update(formData);
            }
        }
    }
}
</script>