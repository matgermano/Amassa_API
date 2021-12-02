const pizza = require('./pizzasRoute')
const entradas = require('./entradasRoutes');
const express = require('express');

module.exports = app => {
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
    });

    app.use(express.json());
    app.use(entradas)
    app.use(pizza)

}