/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const playerRoute = require('../routes/player')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'models')))

app.use('/player', playerRoute)


app.listen(3000);
