const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Buttons = sequelize.define('buttons', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true,
    }
})

module.exports = Buttons;