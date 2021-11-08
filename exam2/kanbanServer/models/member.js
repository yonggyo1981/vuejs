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
		await this.checkJoinData(data);
		
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
			
			return memberInfo;
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
	* 회원가입 유효성 검사
	*   1. 필수 항목 체크(memId, memPw, memPwRe, memNm) - O
	*   2. 아이디 체크(자리수 6자리 이상, 알파벳 + 숫자) - O 
	*   3. 중복 아이디 체크 - O
	*   4. 비밀번호 체크(자리수 8자리 이상, 알파벳 + 숫자 + 특수 문자) - O 
	*   5. 비밀번호 확인 - O
	*   6. 휴대전화번호는 필수 X -> 입력된 경우는 휴대전화번호 형식 체크
	*/
	async checkJoinData(data) {
		// 필수 항목 체크 
		const required = {
			memId : "아이디를 입력하세요.",
			memPw : "비밀번호를 입력하세요.",
			memPwRe : "비밀번호를 확인하세요.",
			memNm : "회원명을 입력하세요.",
		};
		
		for (let key in required) {
			if (!data[key] || (data[key] && data[key].trim() == "")) {
				throw new Error(required[key]);
			}
		}
		
		// 아이디 체크 S 
		const memId = data.memId;
		if (memId.length < 6) {
			throw new Error("아이디는 6자리 이상 입력하세요.");
		}
		
		// test (매칭이되면 true), exec - 매칭이 되면 매칭된 요소를 반환
		// /[^a-z0-9]/ - 알파벳, 숫자가 아닌 문자 - case-insensitive
		if (/[^a-z0-9]/i.test(memId)) {
			throw new Error("아이디는 알파벳과 숫자로만 입력하세요.");
		}
		// 아이디 체크 E 
		
		// 중복 아이디 체크 S 
		const sql = "SELECT COUNT(*) cnt FROM member WHERE memId = ?";
		const rows = await sequelize.query(sql, {
				replacements : [memId],
				type : QueryTypes.SELECT,
		});
		
		if (rows[0].cnt > 0) { // 이미 가입된 경우 
			throw new Error('이미 가입된 아이디 입니다. - ' + memId);
		}
		// 중복 아이디 체크 E
		
		// 비밀번호 체크 S
		const memPw = data.memPw;
		if (memPw.length < 8) {
			throw new Error("비밀번호는 8자리 이상 입력하세요.");
		}

		if (!/[a-z]/i.test(memPw) || !/[0-9]/.test(memPw) || !/[~!@#$%^&*()]/.test(memPw)) {
			throw new Error("비밀번호는 1개이상의 알파벳, 숫자, 특수문자로 입력하세요.");
		}
		// 비밀번호 체크 E 
		
		// 비밀번호 확인 S 
		if (memPw != data.memPwRe) {
			throw new Error("비밀번호를 확인하세요.");
		}
		// 비밀번호 확인 E 

		// 휴대전화번호 형식 체크 S 
		if (data.cellPhone) {
			let cellPhone = data.cellPhone;
			cellPhone = cellPhone.replace(/[^0-9]/g, "");
			const pattern = /^01[016789][0-9]{3,4}[0-9]{4}$/;
			if (!pattern.test(cellPhone)) {
				throw new Error('휴대전화번호 형식이 아닙니다.');
			}
		}
		// 휴대전화번호 형식 체크 E 
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
			const data = rows[0];
			delete data.memPw;
			
			return data;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
};

module.exports = member;