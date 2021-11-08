const member = require("../models/member");
const router = require('express').Router();

router.use(async (req, res) => {
	const mode = req.body.mode || req.query.mode;
	const data = req.body.mode?req.body:req.query;
	
	let success = false;
	let returnData = {};
	let message = "";
	try {
		switch(mode) {
			case "join": // 회원가입 처리 
				const memberInfo = await member.join(data);
				if (memberInfo) {
					success = true;
					returnData = memberInfo;
				} else { // 회원 가입 실패
					throw new Error("회원가입 실패");
				}
				break;
			case "update": // 회원정보 수정
				member.update(data);
				break;
		}
	} catch (err) {
		console.log(err);
		message = err.message;
	}
	const result = { 
		success,
		data : returnData,
		message
	};
	return res.json(result);
});

module.exports = router;