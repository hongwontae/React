const Sequelize = require('sequelize');
const DB = require('../util/database');

const RatingReport = DB.define('rating_report', {
    reportId : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    matchTeam : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
    },
    ratingDescription : {
        type : Sequelize.DataTypes.TEXT,
        allowNull :false
    },
    matchDate : {
        type : Sequelize.DataTypes.DATEONLY,
        allowNull : false
    },
})

module.exports = RatingReport;