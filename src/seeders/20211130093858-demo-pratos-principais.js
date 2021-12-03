module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('pratos_principais', [
            {
                nome: 'lasanha bolonhesa',
                ingredientes: "Ragu de carne, molho de tomate, parmesão e muçarela gratinada. ",
                porcao: 'Para dividir',
                preco: 'R$60,00',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'risoto tropical',
                ingredientes: "Salmão grelhado com risoto de limão siciliano.",
                porcao: 'Individual',
                preco: 'R$45,00',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'nhoque da mama',
                ingredientes: "Nhoque com molho branco ou vermelho. ",
                porcao: 'Para dividir',
                preco: 'R$55,00',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'carbonara do cristo',
                ingredientes: "Calabresa, parmesão, gema de ovo e pimenta do reino.",
                porcao: 'Individual',
                preco: 'R$30,00',
                createdAt: new Date(),
                updatedAt: new Date()
            }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('pratos_principais', null, {})
  }
}