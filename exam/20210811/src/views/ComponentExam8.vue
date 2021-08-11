<template>
    <PageTitle><p>페이지 제목...</p></PageTitle>
    <page-title>페이지 제목2....</page-title>
    <LayerPopup>
        <template #header>
            <h1>팝업 제목</h1>
        </template>
        <template v-slot:default>
            <b>팝업 내용...</b>
        </template>
        <template #footer>
            <h1>팝업 하단</h1>
        </template>
    </LayerPopup>
</template>
<script> 
import LayerPopup from '../components/LayerPopup.vue';
import PageTitle from '../components/PageTitle2.vue';
export default {
    components : { LayerPopup, PageTitle },
}
</script>