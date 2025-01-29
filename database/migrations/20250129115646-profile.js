'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      greeting: {
        type: Sequelize.INTEGER
      },
      job_desk:{
        type :Sequelize.STRING
      },
      name_file:{
        type :Sequelize.STRING
      },
      portofolio1_icon:{
        type :Sequelize.ENUM('github','linkedin','instagram','facebook','twitter')
      },
      portofolio1_link:{
        type :Sequelize.STRING
      },
      portofolio2_icon:{
        type :Sequelize.ENUM('github','linkedin','instagram','facebook','twitter')
      },
      portofolio2_link:{
        type :Sequelize.STRING
      },
      deskripsi:{
        type :Sequelize.STRING
      },
      deskripsi_aboutme:{
        type :Sequelize.STRING
      },
      experience:{
        type :Sequelize.STRING
      },
      education:{
        type :Sequelize.STRING
      },
      profile1_name_file:{
        type :Sequelize.STRING
      },
      profile2_name_file:{
        type :Sequelize.STRING
      },
      emai:{
        type :Sequelize.STRING
      },
      phone:{
        type :Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue:new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue:new Date(),
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('profiles');

  }
};
