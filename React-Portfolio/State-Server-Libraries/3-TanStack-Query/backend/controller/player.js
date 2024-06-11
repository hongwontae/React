/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const Product = require('../models/products')

exports.postPlayer = (req, res, next)=>{
    const {title, content} = req.body;
    const product = new Product(title, content);
    product.save();
};

exports.getPlayer = (req, res, next)=>{
    const product = new Product();
    product.fetchAll((data)=>{
        res.json(data);
    });
}