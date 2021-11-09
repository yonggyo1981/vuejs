import axios from 'axios'

export default {
    methods : {
        async $request(url, data, method) {
            method = method || "GET";
            if (data && data instanceof FormData) {
                data = this.$formDataToJson(data);
            }

            try {
                const result = await axios({
                    method,
                    url,
                    data,
                });
                return result.data;
            } catch (err) {
                console.error(err);
                return false;
            }
        },
        /**
         * FormData 형식 데이터 -> json 
         * @param {*} data 
         */
        $formDataToJson(data) {
            const json = {};
            for (let field of data.entries()) {
                json[field[0]] = field[1];
            }

            return json;
        },
        $showMessage(obj, message) {
            obj.message = message;
            const ref = obj.$refs.popup;
            if(ref) {
                ref.isHide = false;
            }
        },
        /**
         * 로그인 회원 정보 유지 
         * 
         */
        async $loginInit() {
            const token = sessionStorage.getItem("sessionId");
            const apiURL = this.$store.state.apiURL + "/member";
            const data = { mode : "get_member", token };
            const result = await this.$request(apiURL, data, "POST");
            console.log(result);
        }
    }
}