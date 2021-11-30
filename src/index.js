const express = require ('express');
const routes = require('./routes');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;


routes(app)

app.listen(port, () => console.log(`Listening ${port}`));


module.exports = app;