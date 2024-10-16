const Sequelize = require('sequelize');
const DB = require('../util/database');
const Player = require('./player');

const RatingModel = DB.define('rating', {
    ratingId : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    ratingDate : {
        type : Sequelize.DataTypes.DATE,
        allowNull : false
    },
    ratingOppenent : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    rating : {
        type : Sequelize.DataTypes.DECIMAL(3,2),
        allowNull : false
    },
    ratingDescription : {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
    }
});

RatingModel.belongsTo(Player, {foreignKey : 'playerId'});
Player.hasMany(RatingModel, {foreignKey : 'playerId'});

module.exports = RatingModel;