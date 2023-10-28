const { DataTypes } = require('sequelize');
const sequelize = require('./db/connection');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = {
    User,
};