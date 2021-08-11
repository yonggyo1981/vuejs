<template>
    <button type="button" @click="showChildMessage" ref="btn">자식 클릭</button>
</template>

<script>
export default {
    methods : {
        showChildMessage() {
            alert("자식 컴포넌트에서 메세지 출력!");
        }
    }
}
</script>