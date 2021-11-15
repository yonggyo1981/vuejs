const { sequelize, Sequelize : { QueryTypes } } = require('./index');

/**
* 칸반보드 model
*
*/
const kanban = {
	/** 필수 입력 항목 */
	required : {
		//memNo : "회원만 사용가능한 서비스 입니다.",
		status : "작업 구분을 선택하세요.",
		subject : "작업명을 입력하세요.",
		content : "작업내용을 입력하세요.",
	},
	async addWork(data) {
		this.checkData(data); // 데이터 유효성 검사
		
		const replacements = {
				memNo : data.memNo || 0,
				status : data.status,
				subject : data.subject,
				content : data.content,
		};
		const sql = `INSERT INTO worklist (memNo, status, subject, content) 
								VALUES (:memNo, :status, :subject, :content)`;
		try {
			const result = await sequelize.query(sql, {
				replacements,
				type : QueryTypes.INSERT,
			});
			return result[0];
		} catch (err) {
			console.error(err);
			return false;
		}		
	},
	editWork(data) {
		
	},
	deleteWork(idx) {
		
	},
	getList() {
		
	},
	/**
	* 작업내용 조회 
	*
	* @param idx 작업등록번호 
	*/
	async get(idx) {
		try {
			const sql = "SELECT * FROM worklist WHERE idx = ?";
			const rows = await sequelize.query(sql, {
				replacements : [idx],
				type : QueryTypes.SELECT,
			});
			
			if (rows.length == 0) {
				return false;
			}
			
			return rows[0];
		} catch (err) {
			console.error(err);
			return false;
		}
	},
	/** 데이터 유효성 검사 */
	checkData(data) {
		if (data.mode == 'edit') { // 작업내용 수정 
			this.required.idx = "작업등록번호가 누락되었습니다.";
		}
		const required = this.required;
		for (let key in required) {
			if (!data[key]) {
				throw new Error(required[key]);
			}
		}
	}
};

module.exports = kanban;