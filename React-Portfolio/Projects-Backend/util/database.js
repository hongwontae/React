const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodetest', 'root', 'YourRootPassword',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;