const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'teste_db',
    port: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;