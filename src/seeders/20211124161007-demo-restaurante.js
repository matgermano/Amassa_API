'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
     await queryInterface.bulkInsert('entradas', [{
      
        
        nome: "teste",
        ingredientes: "teste",
        preco: "14",
        createdAt: new Date(),
        updatedAt: new Date()
    ,
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('entradas', null, {});
     
  }
};
