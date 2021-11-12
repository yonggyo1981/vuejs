const { sequelize, Sequelize : { QueryTypes } } = require('./index');

/**
* 칸반보드 model
*
*/
const kanban = {
	async addWork(data) {
		const replacements = {
				memNo : data.memNo,
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
		
	}
};

module.exports = kanban;