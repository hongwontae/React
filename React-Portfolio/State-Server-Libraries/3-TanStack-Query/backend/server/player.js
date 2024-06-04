/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const router = express.Router();

const formData = [];

router.get('/test',(req, res, next)=>{
    console.log('Hello Player!');
    res.send('Gerrad')
});

router.get('/pro', (req, res, next)=>{
    console.log('pro')
    res.sendFile(path.join(__dirname, '../', 'data', 'data.html'));
})

router.post('/form', (req, res, next)=>{
    const {title} = req.body
    formData.push({title})
    console.log(formData)
})

router.get('/ro',(req, res, next)=>{
    
})


module.exports = router;