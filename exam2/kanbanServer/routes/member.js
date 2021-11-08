const member = require("../models/member");
const router = require('express').Router();

router.use(async (req, res) => {
	const mode = req.body.mode || req.query.mode;
	const data = req.body.mode?req.body:req.query;
	
	switch(mode) {
		case "join": // 회원가입 처리 
			await member.join(data);
			break;
		case "update": // 회원정보 수정
			member.update(data);
			break;
	}
	
	return res.json({});
});

module.exports = router;