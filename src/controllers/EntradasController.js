const database = require ('../models');

class EntradasController {
   static async index(req, res) {
       try {
        const entradas = await database.Entradas.findAll()
        return res.status(200).json(entradas);
           
       } catch (error) {
           return res.status(500).json(error.message);
       }
    
    }    

    static async show (req, res) {
        const {id} = req.params
        try {
            const idEntradas = await database.Entradas.findOne( { where:
                 { id: Number(id) }
                })
            return res.status(200).json(idEntradas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async save (req, res) {
        const newEntradas =  req.body
        try {
            const createEntradas = await database.Entradas.create(newEntradas);
            return res.status(200).json(createEntradas);

        } catch (error) {
          return res.status(500).json(error.message);

        }
    }

    static async update (req, res) {
        const {id} = req.params
        const novaInfo = req.body       

        try {
            await database.Entradas.update(novaInfo,
                { where:
                { id: Number(id) }
               });
            const infoAtualizada = await database.Entradas.findOne({
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
            await database.Entradas.destroy({
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

module.exports = EntradasController