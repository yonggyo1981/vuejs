export default {
    methods : {
        $sum(num1, num2) {
            return num1 + num2;
        }
    },
    created() {
        console.log("mixin created!");
    },
    mounted() {
        console.log("mixin mounted!");
    },
    unmounted() {
        console.log("mixin unmounted");
    }
}