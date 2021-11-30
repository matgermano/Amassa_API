const database = require('../models');

class Pratos_principaisController {
    static async pegaPprincipais (req, res){
        try{
        const todosPprincipais = await database.pratos_principais.findAll()
        return res.status(200).json(todosPprincipais)
        } catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = Pratos_principaisController