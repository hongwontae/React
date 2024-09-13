const playResult = require("../model/play-result");

exports.getAllResult = async (req, res, next) => {

  const page = +req.query.page

  const limit = 4;
  const offset = (page-1)*4;


  try {
    const {count, rows} = await playResult.findAndCountAll({
      limit,
      offset
    })
    return res.json({
      items : rows,
      currentPage: page,
      totalPages : Math.ceil(count/limit),
      totalItemsCount : count
    })
  } catch (error) {
    console.log('pagination Error');
  }
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
