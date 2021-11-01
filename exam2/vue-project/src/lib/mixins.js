const commonLib = {
    created() {
        console.log("mixin created!");
    },
    mounted() { 
        console.log("mixin mounted");
    },
    unmounted() {   
        console.log("mixin unmounted");
    },
    methods : {

    }
};
export default commonLib;