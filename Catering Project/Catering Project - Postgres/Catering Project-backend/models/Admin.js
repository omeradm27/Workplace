const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const Admin = db.define('Admins', {
    _id: {
        type: DataTypes.INTEGER,    
        primaryKey: true,
        notnull:true,
        autoIncrement: true,
        
    },
    name: {
        type: DataTypes.STRING
    },
    // surname: {
    //     type: DataTypes.STRING
    // },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});


module.exports = Admin;
