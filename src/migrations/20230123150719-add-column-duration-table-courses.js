'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'duration', {  
      allowNull: false,
      type: Sequelize.INTEGER,
      after: 'active'
    })
    },

  down: async (queryInterface, Sequelize) => {
await queryInterface.removeColumn('courses', 'duration')
  }
};
