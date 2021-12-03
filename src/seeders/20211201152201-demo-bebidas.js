module.exports = {
    up: (queryInterface, Sequelize) => {
          return queryInterface.bulkInsert('bebidas', [
              {
              	nome: 'água mineral sem gás',
              	tamanho: '300ml',
              	preco: 'R$ 3,00',
              	createdAt: new Date(),
              	updatedAt: new Date()
              },
              {
              	nome: 'água mineral com gás',
              	tamanho: '300ml',
              	preco: 'R$ 5,00',
              	createdAt: new Date(),
              	updatedAt: new Date()
              },
              {
              	nome: 'coca-cola lata',
              	tamanho: '350ml',
              	preco: 'R$ 6,00',
              	createdAt: new Date(),
              	updatedAt: new Date()
              },
              {
              	nome: 'suco de laranja',
              	tamanho: '1 litro',
              	preco: 'R$ 15,00',
              	createdAt: new Date(),
              	updatedAt: new Date()
              },
              {
              	nome: 'cerveja',
              	tamanho: '600ml',
              	preco: 'R$ 14,00',
              	createdAt: new Date(),
              	updatedAt: new Date()
              }
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('bebidas', null, {})
    }
  }