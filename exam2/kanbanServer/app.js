const express = require('express');
const morgan = require('morgan');
const memberRouter = require('./routes/member'); // 회원 Router
const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(morgan('dev'));

/** body-parser */
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

/** 공통 미들웨어 */
app.use((req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*"); // CORS 
	next();
});

/** 라우터 등록 */
app.use("/member", memberRouter);


/** 없는 페이지 처리 라우터 */
app.use((req, res, next) => {
	const error = new Error(`${req.method} ${req.url}는 없는 페이지 입니다`);
	error.status = 404;
	next(error);	
});

/** 에러처리 라우터 */
app.use((err, req, res, next) => {
	const data = {
		status : err.status || 500,
		message : err.message,
	};
	
	return res.json(data);
});

app.listen(app.get('PORT'), () => {
	console.log(app.get('PORT'), "번 포트에서 서버 대기중....");
});
