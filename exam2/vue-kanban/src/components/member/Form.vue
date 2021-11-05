<template>
<form method="post" autocomplete='off'>
    <input type="text" name="memId" placeholder='아이디' :value="member.memId"><br>          
    <input type="password" name="memPw" placeholder='비밀번호'><br>        
    <input type="password" name="memPwRe" placeholder='비밀번호확인'><br>
    <input type="text" name="memNm" placeholder='회원명'><br>
    <input type="text" name="cellPhone" placeholder="휴대전화번호"><br>
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
            memId : {
                type : String,
                default : "아이디",
            },
            memNm : {
                type : String,
                default : "회원명",
            },
            cellPhone : {
                type : String,
                default:"0000",
            }
        }
    }
}
</script>