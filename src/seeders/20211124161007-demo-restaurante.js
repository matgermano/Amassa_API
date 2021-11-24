'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
     await queryInterface.bulkInsert('entradas', [{
      name: 'John Doe',
      isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('entradas', null, {});
     
  }
};
