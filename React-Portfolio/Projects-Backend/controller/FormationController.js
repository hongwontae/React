const Players = require("../models/players");
const SubPlayer = require("../models/subPlayers");
const Buttons = require("../models/buttons");

exports.postFormation = (req, res, next) => {
  const [player, subPlayer, buttons] = req.body;

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

    if(buttons.length === 1){
      Buttons.create({
        title : 'Formation-1'
      })
    } else {
      const title = buttons[buttons.length-1].title;
    
      const num = Number(title.charAt(title.length-1))
      Buttons.create({
        title : `Formation-${num+1}`
      })
    }
};
  
  
    

exports.getFormation = (req, res, next) => {};

exports.getButton = (req, res, next) => {
  Buttons.findAll().then((data)=>{
    return res.json(data)
  }).then(data => console.log(data))
};
