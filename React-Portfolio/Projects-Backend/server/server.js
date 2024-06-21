const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const sequelize = require("../util/database");

const playersModel = require("../models/players");
const subPlayerModel = require("../models/subPlayers");
const buttonssModel = require("../models/buttons");

const formationRoute = require("../router/FormationRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "models")));

app.use("/for", formationRoute);


sequelize.sync().then(()=>{
  app.listen(4000);
})
