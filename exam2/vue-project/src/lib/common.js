import axios from 'axios';

const commonLib = {
    methods : {
        $sum(num1, num2) {
            return num1 + num2;
        },
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
                return false;
            }                
            
        }
    }
}

export default commonLib;