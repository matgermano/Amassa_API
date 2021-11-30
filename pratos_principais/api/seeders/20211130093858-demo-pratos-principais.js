'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('pratos_principais', [{
        nome: "nhoque da mama",
        ingredientes: "Nhoque com molho branco ou vermelho.",
        porcao: "Para dividir",
        preco: "R$55,00",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  
  }
};
