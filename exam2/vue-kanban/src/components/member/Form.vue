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
export default {
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
        }
    }
}
</script>