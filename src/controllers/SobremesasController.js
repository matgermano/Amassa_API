const database = require ('../models');

class SobremesasController {
   static async index(req, res) {
       try {
        const sobremesas = await database.Sobremesas.findAll()
        return res.status(200).json(sobremesas);
           
       } catch (error) {
           return res.status(500).json(error.message);
       }
    
    }    

    static async show (req, res) {
        const {id} = req.params
        try {
            const idSobremesas = await database.Sobremesas.findOne( { where:
                 { id: Number(id) }
                })
            return res.status(200).json(idSobremesas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async save (req, res) {
        const newSobremesas =  req.body
        try {
            const createSobremesas = await database.Sobremesas.create(newSobremesas);
            return res.status(200).json(createSobremesas);

        } catch (error) {
          return res.status(500).json(error.message);

        }
    }

    static async update (req, res) {
        const {id} = req.params
        const novaInfo = req.body       

        try {
            await database.Sobremesas.update(novaInfo,
                { where:
                { id: Number(id) }
               });
            const infoAtualizada = await database.Sobremesas.findOne({
                where:
                     { id: Number(id)
                    }
                })

           return res.status(200).json(infoAtualizada);
        } catch (error) {
          return res.status(500).json(error.message); 
        }
    }

    static async remove (req, res) {
        const {id} = req.params   
         try {
            await database.Sobremesas.destroy({
                where:
                     { id: Number(id)
                    }
                });
            return res.status(200).json({ message: `id: ${id} foi deletado` });
        } catch (error) {
          return res.status(500).json(error.message); 
        }
    }

}

module.exports = SobremesasController