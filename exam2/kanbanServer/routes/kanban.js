const router = require('express').Router();

router.use((req, res) => {
	const data = req.body;
	const mode = data.mode;
	let success = false;
	let returnData = {};
	let message = "";
	switch (mode) {
		/** 작업 추가 */
		case "add": 
			
			break;
		/** 작업 수정 */
		case "edit" : 
			break;
		/** 작업 삭제 */
		case "delete" :
			break;
		/** 작업 목록 */
		case "getList" : 
			break;
	}
	const _result = {
		success, 
		data : returnData,
		message,
	};
	return res.json(_result);
});

module.exports = router;