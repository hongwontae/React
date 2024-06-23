const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const sequelize = require("../util/database");


const formationRoute = require("../router/FormationRoute");
const buttonRoute = require('../router/ButtonRoute')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "models")));

app.use("/for", formationRoute);
app.use('/but',buttonRoute )


sequelize.sync().then(()=>{
  app.listen(4000);
})
