'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const USER_DATABASE = 'username';
const PASSWORD_DATABASE = 'password';
const URI_DATABASE = 'mongodb+srv://'+ USER_DATABASE + ':' + PASSWORD_DATABASE + '@cluster0-nyatq.mongodb.net/nodestr?retryWrites=true';
const URI_DATABASE_LOCAL = 'mongodb://localhost:27017/node-str';

//conecta ao banco
mongoose.connect(URI_DATABASE_LOCAL, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected...');
    }, err => {
        console.log(URI_DATABASE);
        console.log('Error on database connection: ' + err)
    });

//Carrega as models
const Product = require('./models/product');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;