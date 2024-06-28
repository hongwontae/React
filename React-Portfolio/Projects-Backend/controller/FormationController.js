const Players = require("../models/players");
const SubPlayer = require("../models/subPlayers");
const Buttons = require("../models/buttons");

function playerGetNum(n) {
  if (n === 1) {
    return 0;
  }
  return (n - 1) * 11;
}
function subGetNun(n) {
  if (n === 1) {
    return 0;
  }
  return (n - 1) * 12;
}

exports.postFormation = (req, res, next) => {
  const [player, subPlayer] = req.body;

  Players.bulkCreate(player)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });

  SubPlayer.bulkCreate(subPlayer)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

exports.getFormation = async (req, res, next) => {
  const pNum = playerGetNum(req.query.num);
  const subNum = subGetNun(req.query.num);

  const playerData = await Players.findAll({
    limit: 11,
    offset: pNum,
  });
  const subPlayerData = await SubPlayer.findAll({
    limit: 12,
    offset: subNum,
  });

  res.json({ playerData, subPlayerData });
};

exports.deleteFormation = async (req, res, next) => {
  const num = req.query.data;

  const pNum = playerGetNum(num);
  const subNum = subGetNun(num);

  const playerData = await Players.findAll({
    limit: 11,
    offset: pNum,
  });
  const subPlayerData = await SubPlayer.findAll({
    limit: 12,
    offset: subNum,
  });
  const buttonData = await Buttons.findAll({
    limit: 1,
    offset: num-1,
  });

  const playerUpdatePromises = playerData.map(ele =>{
    return ele.update({ title : 'delete'});
  })

  const subPlayerUpdatePromises = subPlayerData.map(ele => {
    return ele.update({ title : 'delete'})
  })

  const buttonUpdatePromises = buttonData.map(ele => {
    return ele.update({title : 'delete'})
  })

  await Promise.all(playerUpdatePromises);
  await Promise.all(subPlayerUpdatePromises);
  await Promise.all(buttonUpdatePromises)

  res.json({message : 'Success DELETE(fact => update)'})


};
