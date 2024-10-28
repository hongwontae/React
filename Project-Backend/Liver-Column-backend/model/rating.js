const Sequelize = require('sequelize');
const DB = require('../util/database');
const Player = require('./player');
const RatingReport = require('./rating-report');

const RatingModel = DB.define('rating', {
    ratingId : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    rating : {
        type : Sequelize.DataTypes.DECIMAL(3,2),
        allowNull : false
    },
});

RatingModel.belongsTo(Player, {foreignKey : 'playerId'});
Player.hasMany(RatingModel, {foreignKey : 'playerId'});

RatingModel.belongsTo(RatingReport, {foreignKey : 'reportId'});
RatingReport.hasMany(RatingModel, {foreignKey : 'reportId'});


module.exports = RatingModel;