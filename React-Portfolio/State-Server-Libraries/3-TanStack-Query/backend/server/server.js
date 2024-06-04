/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const playerRoutes = require('./player');
const historyRoutes = require('./history')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'data')))

app.use('/player',playerRoutes);
app.use(historyRoutes);


app.listen(3000);
