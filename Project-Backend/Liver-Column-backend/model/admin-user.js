const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const adminUser = sequelize.define('adminUser', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    email : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
    
});

module.exports = adminUser