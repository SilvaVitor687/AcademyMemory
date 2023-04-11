'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
    await queryInterface.createTable(
      'Automobiles', 
      { 
        id_auto: {
          type: Sequelize.INTEGER, // do tipo INT do SQL
          allowNull: false, // NOT NULL do SQL
          primaryKey: true, // PRIMARY KEY do SQL
          autoIncrement: true, // AUTO_INCREMENT do SQL
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        exchange: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        km: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fuel: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        years: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        }

      }      
    );
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Automobiles');
     
  }
};
