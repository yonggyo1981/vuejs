<template>
    <div :style="style1">스타일 속성 바인딩1</div>
    <div :style="[addStyle1, addStyle2]">스타일 속성 바인딩2</div>
</template>
<script>
export default {
    data() {
        return {
            style1 : {
                background: "yellow",
                color: "red",
                fontSize : "20px",
            },
            addStyle1 : "background:orange",
            addStyle2 : "font-size: 30px; color: red",
        };
    }   
}
</script>