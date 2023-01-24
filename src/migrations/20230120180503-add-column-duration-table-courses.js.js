'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('courses', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER,
      after: 'active'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'duration')
  }
};