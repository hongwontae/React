/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

router.get('/test',(req, res, next)=>{
    console.log('Hello Player!');
    res.send('Gerrad')
})


module.exports = router;