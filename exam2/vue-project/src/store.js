import { createStore } from 'vuex';

const store = createStore({
    state() { // 공통 속성, 그냥 변수로 접근 X, 별도의 수정 메서드
        return {
            count : 0,
        };
    },
    mutations : {
        increment(state) {
            state.count++;
        }
    }
});

export default store;