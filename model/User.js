const Sequelize = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.BLOB('long')
    },
    pdf: {
        type: Sequelize.BLOB('long'),
        allowNull: true
    }
},{
    timestamps: false
});

module.exports = User;