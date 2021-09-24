const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.js')
const sequelize = new Sequelize(config);



const Pessoa = sequelize.define('Pessoa', {
    idpessoa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
})

module.exports = Pessoa;