import axios from 'axios'

export default {
    methods : {
        async $request(url, data, method) {
            method = method || "GET";
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

        }
    }
}