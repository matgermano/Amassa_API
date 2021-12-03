const bodyParser = require('body-parser');
const pratosPrincipais = require('./p-principaisRoute');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pratosPrincipais)
    app.get('/', (req, res) => res.send('Olá!'))
}