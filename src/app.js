'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://rodrigopereiradev:#Coltm4a1@cluster0-nyatq.mongodb.net/nodestr?retryWrites=true',
    { useNewUrlParser: true });

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', indexRoute);
app.use('/products', productRoute);
module.exports = app;