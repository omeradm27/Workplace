const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Category = db.define("Categories", {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notnull: true,
        autoIncrement: true,
    },
    parent: {
        type: DataTypes.STRING,
        notnull: true,
    },
    slug: {
        type: DataTypes.STRING,
        notnull: false,
    },
    type: {
        type: DataTypes.STRING,
        notnull: false,
    },
    icon: {
        type: DataTypes.STRING,
        notnull: false,
    },
    children: [{}],
    status: {
        type: DataTypes.STRING,
        enum: ['SHOW', 'HIDE'],
        default: 'SHOW',
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});


module.exports = Category;
