'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
     await queryInterface.createTable(
      'Users', 
      { 
        id: {
          //id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
          type: Sequelize.INTEGER, // do tipo INT do SQL
          allowNull: false, // NOT NULL do SQL
          primaryKey: true, // PRIMARY KEY do SQL
          autoIncrement: true, // AUTO_INCREMENT do SQL

        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }     
      
      }
    );
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
     
  }
};
