require('dotenv').config(); //TODO ne işe yarıyor ??
const { Sequelize } = require('sequelize')

module.exports = new Sequelize('Catering', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

