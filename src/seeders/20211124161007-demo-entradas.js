'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
     await queryInterface.bulkInsert('entradas', [{
      
        
        nome: "Brusqueta tomatinho",
        ingredientes: "Torrada, muçarela, tomate cereja e manjericão.",
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
