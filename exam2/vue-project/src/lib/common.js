import axios from 'axios';

const commonLib = {
    methods : {
        $sum(num1, num2) {
            return num1 + num2;
        },
        async $httpRequest(url, data, method) {
            method = method || "GET";
            let result;
            try {
                result = await axios({
                    method,
                    url,
                    data
                });
                console.log(result);
                return result;
            } catch (err) {
                console.log(err);
                return false;
            } 
        }
    }
}

export default commonLib;