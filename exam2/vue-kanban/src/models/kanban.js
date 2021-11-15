export default {
    data() {
        return {
            requestURL : this.$store.state.apiURL + "/kanban",
        };
    },
    methods : {
        /** 작업 추가 */
        async $addWork(data) {
           const result = await this.$request(this.requestURL, data, "POST");
           return result;
        },
        /** 작업 수정 */
        $editWork(data) {
            console.log(data);
        },
        /** 작업 삭제 */
        $deleteWork(idx) {
            console.log(idx);
        },
        /** 작업 목록  */
        $getList(status) {
            console.log(status);
        },
        /**
         * 작업 내용 조회
         * @param {*} idx 
         */
        async $get(idx) {
            const data = {
                mode : "get",
                idx,
            };
            const result = await this.$httpRequest(this.requestURL, data);
            console.log(result);
        }
    }
}