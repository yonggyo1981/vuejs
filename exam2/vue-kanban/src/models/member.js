/**
 * 회원 model
 * 
 */
export default {
    data() {
        return {
            requestURL : this.$store.state.apiURL + "/member",
        };
    },
    methods : {
        /**
         * 회원가입 처리 
         * @param {*} data 
         */
        async $join(data) {
            const result = await this.$request(this.requestURL,data, "POST");
            return result;
        },
        /**
         * 회원정보 수정 
         * @param {*} data 
         */
        $update(data) {
            console.log(data);
        }
    }
}