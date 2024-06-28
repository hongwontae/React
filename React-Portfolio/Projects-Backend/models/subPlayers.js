const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const subplayers = sequelize.define('subplayers', {
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
    },
    sub : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = subplayers