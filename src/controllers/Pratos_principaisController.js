const database = require ('../models');

class Pratos_principaisController {
   static async pegaPprincipais(req, res) {
       try {
        const todosPprincipais = await database.pratos_principais.findAll()
        return res.status(200).json(todosPprincipais);
           
       } catch (error) {
           return res.status(500).json(error.message);
       }
    
    }    

    static async show (req, res) {
        const {id} = req.params
        try {
            const idPprincipais = await database.pratos_principais.findOne( { where:
                 { id: Number(id) }
                })
            return res.status(200).json(idPprincipais);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async save (req, res) {
        const newPprincipais =  req.body
        try {
            const createPprincipais = await database.pratos_principais.create(newPprincipais);
            return res.status(200).json(createPprincipais);

        } catch (error) {
          return res.status(500).json(error.message);

        }
    }

    static async update (req, res) {
        const {id} = req.params
        const novaInfo = req.body       

        try {
            await database.pratos_principais.update(novaInfo,
                { where:
                { id: Number(id) }
               });
            const infoAtualizada = await database.pratos_principais.findOne({
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
            await database.pratos_principais.destroy({
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

module.exports = Pratos_principaisController
