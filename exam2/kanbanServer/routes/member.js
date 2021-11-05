const router = require('express').Router();

router.use((req, res) => {
	console.log(req.body);
	return res.json(req.body);
});

module.exports = router;