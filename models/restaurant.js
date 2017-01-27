const db = require('./db');
const Sequelize = require('sequelize');
const Restaurant = db.define('Restaurant',{
	name:{		
		type: Sequelize.STRING,
		allowNull:false
	},
	cuisine:{
		type: Sequelize.STRING,
		allowNull:false
	},
	price:{
		type: Sequelize.INTEGER,
		validate :{
			min:1,
			max:5
		}
	}
},{});



module.exports = Restaurant;