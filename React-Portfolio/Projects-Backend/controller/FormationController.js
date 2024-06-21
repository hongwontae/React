const Players = require("../models/players");
const SubPlayer = require("../models/subPlayers");
const Buttons = require("../models/buttons");

exports.postFormation = (req, res, next) => {
  const [player, subPlayer, buttons] = req.body;

  Players.bulkCreate(player)
    .then((result) => {
      // res.json({ message: "Success Player Data!" });
    })
    .catch((err) => {
      console.log(err);
    });

  SubPlayer.bulkCreate(subPlayer)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });

    if(buttons.length === 1){
      Buttons.create({
        title : 'Formation-1'
      })
    } else {
      const title = buttons[buttons.length-1].title;
      console.log(title)
      const num = Number(title.charAt(title.length-1))
      console.log(num)
      Buttons.create({
        title : `Formation-${num+1}`
      })
    }
};
  
  
    

exports.getFormation = (req, res, next) => {};

exports.getButton = () => {};
