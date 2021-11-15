<template>
    <div class='stit'>{{ title }}</div>
</template>
<script>
export default {
    data() {
        return {
            title : "",
            list : [],
        };
    },
    props : {
        status : {
            type : String,
            default : "ready",
        }
    },
    mounted() {
        switch(this.status) {
            case "progress" : 
                this.title = "진행중";
                break;
            case "done" : 
                this.title = "완료";
                break;
            default : 
                this.title = "준비중";
        }
    }
}
</script>