const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const buttons = sequelize.define('buttons', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : true,
        primaryKey : true,
        autoIncrement : true
    },
    countData : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
    }
})

module.exports = buttons;