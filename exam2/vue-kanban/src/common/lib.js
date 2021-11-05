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
        }
    }
}