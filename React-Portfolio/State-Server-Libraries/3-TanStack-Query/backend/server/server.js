/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const playerRoutes = require('./player');
const historyRoutes = require('./history')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());

app.use('/player',playerRoutes);
app.use(historyRoutes);

app.use((req, res, next)=>{
    console.log('In MiddleWare!');
    next();
});

app.use((req, res, next)=>{
    console.log('another MiddleWare');
    res.send('<h1>Hello World</h1>');
    
});


app.listen(3000);
