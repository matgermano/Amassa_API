const entradas = require('./entradasRoutes');
const express = require('express');
const cors = require('cors');


module.exports = app => {
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
    });

    app.use(cors);
    app.use(express.json());
    app.use(entradas);
    
}