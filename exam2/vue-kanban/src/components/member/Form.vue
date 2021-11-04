<template>
<form method="post" autocomplete='off'>
    <input type="text" name="memId" placeholder='아이디'><br>          
    <input type="password" name="memPw" placeholder='비밀번호'><br>        
    <input type="password" name="memPwRe" placeholder='비밀번호확인'><br>
    <input type="text" name="memNm" placeholder='회원명'><br>
    <input type="text" name="cellPhone" placeholder="휴대전화번호"><br>
    <button type="submit" v-if="mode == 'join'">가입하기</button>
    <button type="submit" v-else>수정하기</button>
</form>
</template>
<script>
export default {
    props : {
        mode : {
            type : String,
            default : "join2",
        }
    }
}
</script>