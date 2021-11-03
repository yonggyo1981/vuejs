import axios from "axios";

export default {
    methods : {
        async $httpRequest(url, data, method) {
            method = method || "GET";
            const result = await axios({
                method,
                url,
                data
            });
        }
    }
}