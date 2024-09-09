const playResult = require("../model/play-result");

exports.getAllResult = async (req, res, next) => {
  const allData = await playResult.findAll();
  return res.json(allData);
};

exports.getOneResult = async (req, res, next) => {
  const query = req.params.id;
  const oneResultData = await playResult.findByPk(query);
  return res.json(oneResultData);
};

exports.postPlayResult = async (req, res, next) => {
  const {
    title,
    description,
    match_team: matchTeam,
    matchDay: date,
    playResult: pr,
    op,
  } = req.body;

  const formattedPr = `${pr} : ${op}`;

  if(!req?.file?.filename){
    const saveResult = await playResult.create({
      title,
      description,
      matchTeam,
      imagePath: 'not image',
      date,
      playResult: formattedPr,
    });
    return res.json({message : 'data arrive && image not', data : saveResult});
  }
  const formattedImagePath = `uploads/${req.file.filename}`;

  const saveResult = await playResult.create({
    title,
    description,
    matchTeam,
    imagePath: formattedImagePath,
    date,
    playResult: formattedPr,
  });

  return res.json({ message: "data arrive", data : saveResult });
};
