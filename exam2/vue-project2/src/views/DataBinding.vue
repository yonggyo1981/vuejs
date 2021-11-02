<template>
    <PageTitle :title="title" />
    {{ title }}
    <input type="text" v-model="title" />
    <br>
    <button type="button" @click="msg">클릭!</button>
    <br>
    <br>
    <input type="number" v-model.number="num1" /> + 
    <input type="number" v-model.number="num2" /> = 
    {{ result }}
    <br>
    <br>
    <input type="text" v-focus v-style="addStyle" />
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
import mixinex from "../mixinex.js";
export default {
    mixins : [mixinex],
    name : "컴포넌트 이름(생략)",
    components : {PageTitle},
    data() {
        return {
            title : "제목(data)",
            num1 : 0,
            num2 : 0,
            addStyle : {
                color : "red",
                background : "yellow",
            },
        };
    },
    computed : {
        result() {
            return this.num1 + this.num2;
        }
    },
    provide() {
        return {
            provideTitle : "제목(Provide)",
        };
    },
    created() {
        console.log("CREATED!");
    },
    mounted() {
        console.log("MOUNTED!");
        //this.msg();
        const result = this.$sum(10, 20);
        console.log("result : ", result);
    },
    unmounted() {
        console.log("UNMOUNTED");
    },
    methods : {
        msg() {
            alert("테스트 메세지!");
        }
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