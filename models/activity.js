const db = require('./db');
const Sequelize = require('sequelize');
const Activity = db.define('Activity',{
	name:{
		type: Sequelize.STRING,
		allowNull:false
	},
	age_range:{
		type: Sequelize.STRING
	}
},{});



module.exports = Activity;