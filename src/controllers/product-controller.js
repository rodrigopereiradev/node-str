'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    let product = new Product(res.body);
    product.save().then(data => {
        res.status(201).send({
            message: 'Produto Cadastrado com sucesso :)!',
            data: data
        });
    })
        .catch(error => {
            res.status(400).send({
                message: 'Deu ruim ao cadastrar o produto :(',
                data: error
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
};