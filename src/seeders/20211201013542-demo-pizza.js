module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('pizzas', [
			{
				nome: ' pizza calabresa',
				ingredientes: "Mussarela, calabresa e cebola, oregano",
				tamanho: '45cm',
				preco: 'R$ 65',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'pizza napolitana',
				ingredientes: "Mussarela, tomate, oregano e parmesão ralado",
				tamanho: '45cm',
				preco: 'R$ 60',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'pizza portuguesa',
				ingredientes: "Mussarela, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde",
				tamanho: '45cm',
				preco: 'R$ 65',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'pizza veggie',
				ingredientes: "Mussarela, champignon, azeitona preta, cebola, oregano e pimentão verde",
				tamanho: '45cm',
				preco: 'R$ 80',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Brotinho de Ovomaltine',
				ingredientes: "creme de baunilha e creme de Ovomaltine crocante.",
				tamanho: '20 cm',
				preco: 'R$ 40',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('pizzas', null, {})
  }
}
