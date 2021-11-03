<template> 
    <LayerPopup> 
        <template #header>
            <h1>제목 영역</h1>
        </template>
        <template #default>
            <h1>내용 영역</h1>
        </template>
        <template #footer>
            <h1>하단 영역</h1>
        </template>
    </LayerPopup>
    <PageTitle>제목</PageTitle>
</template>
<script> 
import LayerPopup from "./SlotPopup.vue";
import PageTitle from "../components/PageTitle3.vue";
export default {
    components: {LayerPopup, PageTitle}
}
</script>