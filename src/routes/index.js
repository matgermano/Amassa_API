const pizza = require('./pizzasRoute');
const sobremesas = require('./sobremesasRoutes');
const pratosPrincipais = require('./p-principaisRoute');
const bebidas = require('./bebidasRoute');
const entradas = require('./entradasRoutes');
const express = require('express');



module.exports = app => {
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
    });

    
    app.use(express.json());
    app.use(entradas);
    app.use(pizza);
    app.use(sobremesas);
    app.use(pratosPrincipais);
    app.use(bebidas);

}