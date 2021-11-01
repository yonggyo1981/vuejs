<template>
    <input type="text" v-focus v-style="customStyle" />
    <div v-msg="message"></div>
</template>
<script>
export default {
    data() {
        return {
            customStyle : {
                color : "red",
                background : "gray",
            },
            message : "v-msg 테스트",
        };
    },
    directives : {
        focus : {
            mounted(el) {
                console.log("v-focus");
                el.focus();
            }
        },
        style : {
            mounted(el, bindings) {
                //console.log(bindings);
                el.style.color = bindings.value.color;
                el.style.background = bindings.value.background;
            }
        }
    }
}
</script>