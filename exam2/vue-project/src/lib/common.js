import axios from 'axios';
const commonLib = {
    methods : {
        $sum(num1, num2) {
            return num1 + num2;
        },
        async $httpRequest(url, data, method) {
            return await axios({
                method,
                url,
                data
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }
};

export default commonLib;