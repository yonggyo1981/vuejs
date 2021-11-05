import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            member : {} // 로그인 회원 정보
        };
    },
    mutations : {
        setMember(state, member) {
            state.member = member;
        }
    }
});

export default store;