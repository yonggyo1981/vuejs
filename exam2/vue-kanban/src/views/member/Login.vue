<template>
    <PageTitle>로그인</PageTitle>
    <form ref="frmLogin" autocomplete="off" @submit="formSubmit($event)">
        <input type="text" name="memId" placeholder="아이디"><br>
        <input type="password" name="memPw" placeholder="비밀번호"><br>
        <input type="submit" value="로그인">
    </form>
</template>
<script>
import PageTitle from '../../components/PageTitle.vue'
export default {
    components : {PageTitle},
    methods : {
        formSubmit(e) {
            console.log(e);
        }
    }

}
</script>