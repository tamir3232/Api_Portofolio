'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('profiles', 'uniqueName', {
      type: Sequelize.STRING,
      unique: true
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('profiles', 'uniqueName')
  }
};
