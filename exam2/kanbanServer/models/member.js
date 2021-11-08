const { sequelize, Sequelize : { QueryTypes } } = require("./index");
const bcrypt = require('bcrypt');

/**
* 회원 models
*
*/
const member = {
	/**
	* 회원가입
	*
	*/
	async join(data) {
		try {
			const sql = `INSERT INTO member (memId, memPw, memNm, cellPhone) 
									VALUES (:memId, :memPw, :memNm, :cellPhone)`;
			const hash = data.memPw?await bcrypt.hash(data.memPw, 10):"";
			let cellPhone = "";
			if (data.cellPhone) {
				cellPhone = data.cellPhone.replace(/[^0-9]/g, "");
			}
			const replacements = {
				memId : data.memId,
				memPw : hash,
				memNm : data.memNm,
				cellPhone,
			};

			const result = await sequelize.query(sql, {
					replacements : replacements,
					type : QueryTypes.INSERT,
			});
			
			const memNo = result[0];
			const memberInfo = await this.get(memNo);
		} catch (err) {
			console.error(err);
			return false;
		}
	},
	/**
	* 회원정보 수정
	*
	*/
	update(data) {
		
	},
	/**
	* 회원 정보 조회
	*
	* @param memNo - 정수 - 회원번호, 문자 -> 아이디
	*/
	async get(memNo) {
		try {
			let fields = "memNo";
			if (typeof memNo == 'string') {
				fields = "memId";
			}
			
			const sql = `SELECT * FROM member WHERE ${fields} = ?`;
			const rows = await sequelize.query(sql, {
					replacements : [memNo],
					type : QueryTypes.SELECT,
			});
			
			if (rows.length == 0) { // 회원이 없는 경우 
				return false;
			}
			
			return rows[0];
		} catch (err) {
			console.error(err);
			return false;
		}
	}
};

module.exports = member;