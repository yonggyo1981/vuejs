import axios from "axios";

export default {
    methods : {
        async $httpRequest(url, data, method) {
            method = method || "GET";
            try {
                const result = await axios({
                    method,
                    url,
                    data
                });
                return result.data;
            } catch (err) {
                console.error(err);
            }
        }
    }
}