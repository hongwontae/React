const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Players = sequelize.define('players', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    top : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false
    },
    left : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Players