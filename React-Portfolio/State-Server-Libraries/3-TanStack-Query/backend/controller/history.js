/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const History = require('../models/history');

exports.postHistory = (req, res, next)=>{
    const {name, title, content} = req.body
    const history = new History(name, title, content);
    history.save();
}


exports.getHistory = (req, res, next)=>{
    const history = new History();
    history.fetchAll((data)=>{
        res.json(data)
    })
}

