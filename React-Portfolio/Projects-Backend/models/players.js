const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const players = sequelize.define('players', {
    id : {
        type : Sequelize.DataTypes.STRING,
        primaryKey : true,
        allowNull : false
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

module.exports = players