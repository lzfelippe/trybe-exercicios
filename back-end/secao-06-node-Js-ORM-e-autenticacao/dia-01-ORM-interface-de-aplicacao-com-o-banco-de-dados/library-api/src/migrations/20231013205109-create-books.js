'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cratedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
