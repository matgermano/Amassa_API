const express = require('express')
const routes=require("./routes/index")
const app = express()
const port = 3000
routes(app)
app.listen( process.env.PORT || 3000, () => { console.log(`Servidor rodando na porta ${port}`); })
module.exports=app
