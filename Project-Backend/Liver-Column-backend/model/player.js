const Sequelize = require('sequelize');
const DB = require('../util/database');

const PlayerModel = DB.define('player', {
    playerId : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    playerName : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    backNumber : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false
    },
    position : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    start_member_bol : {
        type : Sequelize.DataTypes.BOOLEAN,
        allowNull : false
    }
})

module.exports = PlayerModel;