'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      pageQuantity: 295,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pageQuantity: 1216,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Game of Thrones',
      author: 'George R.R. Martin',
      pageQuantity: 694,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ]),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
