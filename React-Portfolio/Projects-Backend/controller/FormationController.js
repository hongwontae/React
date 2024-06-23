const Players = require("../models/players");
const SubPlayer = require("../models/subPlayers");
const Buttons = require("../models/buttons");

exports.postFormation = (req, res, next) => {
  const [player, subPlayer] = req.body;

  Players.bulkCreate(player)
    .then((result) => {
    })
    .catch((err) => {
      console.log(err);
    });

  SubPlayer.bulkCreate(subPlayer)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};
  
  
exports.getFormation = (req, res, next) => {
  
};


