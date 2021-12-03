const database = require ('../models');

class BebidasController {
   static async index(req, res) {
       try {
        const bebidas = await database.Bebidas.findAll()
        return res.status(200).json(bebidas);
           
       } catch (error) {
           return res.status(500).json(error.message);
       }
    
    }    

    static async show (req, res) {
        const {id} = req.params
        try {
            const idBebidas = await database.Bebidas.findOne( { where:
                 { id: Number(id) }
                })
            return res.status(200).json(idBebidas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async save (req, res) {
        const newBebidas =  req.body
        try {
            const createBebidas = await database.Bebidas.create(newBebidas);
            return res.status(200).json(createBebidas);

        } catch (error) {
          return res.status(500).json(error.message);

        }
    }

    static async update (req, res) {
        const {id} = req.params
        const novaInfo = req.body       

        try {
            await database.Bebidas.update(novaInfo,
                { where:
                { id: Number(id) }
               });
            const infoAtualizada = await database.Bebidas.findOne({
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
            await database.Bebidas.destroy({
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

module.exports = BebidasController