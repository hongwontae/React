const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const playResult = sequelize.define('play_result', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    title : {   
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
    },
    date : {
        type : Sequelize.DataTypes.DATE,
        allowNull : false
    },
    matchTeam : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    imagePath : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    playResult : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    myResult : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    opResult : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
});

module.exports = playResult;