const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const formationRoute = require('../router/FormationRoute')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'models')));

app.use('/for', formationRoute);

app.listen(4000);