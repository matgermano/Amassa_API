const database = require('../models')
class PizzaController {
    static async pegaTodasAsPizzas(req, res) {
        try {
            const todasAsPizzas = await database.pizzas.findAll()
            return res.status(200).json(todasAsPizzas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaPizza(req, res) {
        const { id } = req.params
        try {
            const umaPizza = await database.pizzas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaPizza)
        } catch (error) { }
    }


    static async criaPizza(req, res) {
        const novaPizza = req.body
        try {
            const novaPizzaCriada = await database.pizzas.create(novaPizza)
            res.status(200).json(novaPizzaCriada)
        } catch (error) { }
    }
    static async atualizaPizza(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.pizzas.update(novasInfos, { where: { id: Number(id) } })
            const pizzaAtualizada = await database.pizzas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pizzaAtualizada)
        } catch (error) {
        }
    }
static async apagaPizza(req, res){
    const { id } = req.params
    try{
await database.pizzas.destroy({ where: { id: Number(id) } })
return res.status(200).json({mensagem:`id ${id} deletado`})

    }catch(error){}
}
}


module.exports = PizzaController