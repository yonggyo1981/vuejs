<template>
    <input type="text" v-focus v-style="addStyle" v-msg />
</template>
<script>
export default {
    data() {
        return {
            addStyle : {
                color : "red",
                background : "yellow",
            }
        };
    },
    directives : {
        focus : {
            mounted(el) {
                el.focus();
            }
        },
        style : {
            mounted(el, bindings) {
                el.style.color = bindings.value.color;
                el.style.background = bindings.value.background;
            }
        }
    }
}
</script>