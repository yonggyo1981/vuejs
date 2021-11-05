import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            apiURL : "http://localhost:3000",
            // 로그인 회원 정보
            member : {},
        };
    },
    mutations : {
        setMember(state, member) {
            state.member = member;
        }
    }
});

export default store;