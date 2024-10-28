const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('liverpool_column', 'root', 'YourRootPassword', {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;
