module.exports = {
    up: (queryInterface, Sequelize) => {
          return queryInterface.bulkInsert('sobremesas', [
              {
                  nome: 'brownie com sorvete ',
                  ingredientes: "Brownie de chocolate com sorvete de creme e doce de leite.",
                  porcao: 'Individual',
                  preco: 'R$20,00',
                  createdAt: new Date(),
                  updatedAt: new Date()
              },
              {
                  nome: 'banana da feira',
                  ingredientes: "Banana assada com canela, açucar e sorvete.",
                  porcao: 'Individual',
                  preco: 'R$16,00',
                  createdAt: new Date(),
                  updatedAt: new Date()
              },
              {
                  nome: 'bola de sorvete',
                  ingredientes: "Limão ou coco.",
                  porcao: 'Individual',
                  preco: 'R$12,00',
                  createdAt: new Date(),
                  updatedAt: new Date()
              },
              {
                  nome: 'brigadeiro de colher',
                  ingredientes: "Brigadeiro da casa.",
                  porcao: 'Individual',
                  preco: 'R$8,00',
                  createdAt: new Date(),
                  updatedAt: new Date()
              }
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('sobremesas', null, {})
    }
  }