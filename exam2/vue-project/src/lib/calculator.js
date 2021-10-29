import { reactive, computed, toRefs } from 'vue';
function calculator() {
    let state = reactive({
         num1 : 0,
         num2 : 0,
        result : computed(() => state.num1 + state.num2),
    });

    return toRefs(state);
}

function func1() {

}

function func2() {

}

export {
    calculator,
    func1,
    func2,
}