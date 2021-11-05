const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require("../config/config")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
	sequelize,  // sync -> DB 연결, query 
	Sequelize, // Sequelize.QueryTypes
};