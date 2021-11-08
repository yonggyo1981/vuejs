const { sequelize, Sequelize : { QueryTypes } } = require("./index");
 
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
		const sql = `INSERT INTO member (memId, memPw, memNm, cellPhone) 
								VALUES (:memId, :memPw, :memNm, :cellPhone)`;
								
		const result = await sequelize.query(sql, {
				replacements : replacements,
				type : QueryType.INSERT,
		});
	},
	/**
	* 회원정보 수정
	*
	*/
	update(data) {
		
	}
};

module.exports = member;