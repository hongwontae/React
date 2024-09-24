const { where } = require("sequelize");
const PlayResult = require("../model/play-result");

exports.getAllResult = async (req, res, next) => {
  const page = +req.query.page;

  const limit = 4;
  const offset = (page - 1) * 4;

  try {
    const { count, rows } = await PlayResult.findAndCountAll({
      limit,
      offset,
    });
    return res.json({
      items: rows,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItemsCount: count,
    });
  } catch (error) {
    console.log("pagination Error");
  }
};

exports.getOneResult = async (req, res, next) => {
  const query = req.params.id;
  const oneResultData = await PlayResult.findByPk(query);
  return res.json(oneResultData);
};

exports.getOneModiData = async (req, res, next) => {
  console.log('what??')
  const id = req.params.id;
  const oneResultData = await PlayResult.findByPk(id)

  const formattedDate = new Date(oneResultData.date);

  const YEAR = formattedDate.getFullYear();
  let Month = formattedDate.getMonth();
  let day = formattedDate.getDay();

  if(Month < 10){
    Month = `0${Month}`
  }

  if(day < 10){
    day = `0${day}`
  }

  const realDate = `${YEAR}-${Month}-${day}`

  res.json({data : oneResultData, realDate})
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

  if (!req?.file?.filename) {
    const saveResult = await PlayResult.create({
      title,
      description,
      matchTeam,
      imagePath: "not image",
      date,
      playResult: formattedPr,
      myResult: pr,
      opResult: op,
    });
    return res.json({ message: "data arrive && image not", data: saveResult });
  }
  const formattedImagePath = `uploads/${req.file.filename}`;

  const saveResult = await PlayResult.create({
    title,
    description,
    matchTeam,
    imagePath: formattedImagePath,
    date,
    playResult: formattedPr,
    myResult: pr,
    opResult: op,
  });

  return res.json({ message: "data arrive", data: saveResult });
};


exports.updateResult = async (req, res, next)=>{
  const id = req.params.id;
  console.log(id+'dldldldldl')

  const {
    title,
    description,
    matchTeam,
    matchDay,
    myResult,
    opResult,
    playResult,
  } = req.body;

  const selectData = await PlayResult.findByPk(id);

  const formattedPr = `${myResult} : ${opResult}`;


  if (!req?.file?.filename) {
    const saveResult = await selectData.update({
      title,
      description,
      matchTeam,
      imagePath: "not image",
      date : matchDay,
      playResult: formattedPr,
      myResult,
      opResult,
    });
    return res.json({ message: "data arrive && image not", data: saveResult });
  }

  const formattedImagePath = `uploads/${req.file.filename}`;

  const saveResult = await selectData.update({
    title,
    description,
    matchTeam,
    imagePath: formattedImagePath,
    date : matchDay,
    playResult: formattedPr,
    myResult,
    opResult,
  });

  return res.json({ message: "data arrive", data: saveResult });


}
