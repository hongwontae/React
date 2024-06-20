const Sequelize = require('sequelize');

const sequelize = new Sequelize('players', 'root', 'YourRootPassword',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;