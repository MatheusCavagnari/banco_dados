const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'password', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;
