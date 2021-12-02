const bodyParser=require('body-parser')
const pizza=require('./pizzasRoute')
module.exports=app=>{
    app.use(bodyParser.json())
    app.use(pizza)
    
}