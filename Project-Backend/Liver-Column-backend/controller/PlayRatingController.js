const Player = require("../model/player");
const Rating = require("../model/rating");
const sequelize = require("../util/database");
const {col, fn} = require('sequelize');

exports.getAllRating = async (req, res, next) => {

  const results = await Rating.findAll({
    attributes : [
        'ratingId',
        'ratingOppenent',
        'ratingDescription',
        'rating',
        'ratingDate',
        [col('playerName'), 'playerName'],
        [col('backNumber'), 'backNumber']
    ],
    include : [
        {
            model : Player,
            attributes : [],
            required : true
        }
    ],
    order : [fn('DATE', col('ratingDate'))]
  })

  const groupedResults = results.reduce((groups, item) => {
    const dateKey = item.ratingDate.toISOString().split('T')[0];
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(item);
    return groups;
  }, {});

  

  const groupedArray = Object.values(groupedResults);

  const page = +req.body.page || 1;
  const limit = 4;

  const totalGroups = groupedArray.length
  const totalPages = Math.ceil(totalGroups/limit);

  const paginationGroups = groupedArray.slice((page-1) * limit, page*limit);

  return res.json({
    currentPage : page,
    totalPages : totalPages,
    totalGroups : totalGroups,
    items : paginationGroups,
  });

};

exports.getOneRating = async (req, res, next)=>{
    const date = req.query.date;
    console.log(date);
    try {
        const ratings = await Rating.findAll({
          include: [
            {
              model: Player,
              attributes: ['playerName', 'backNumber'],
            },
          ],
          where: sequelize.where( // 조건 추가
            sequelize.fn('DATE', sequelize.col('ratingDate')),
            date // 전달된 날짜와 비교
          ),
          attributes: [
            'ratingId', 
            'ratingOppenent', 
            'ratingDescription', 
            'rating', 
            'ratingDate'
          ],
        });
    
        return res.json({data : ratings}); // 결과를 JSON 형태로 응답
      } catch (error) {
        console.error('Error fetching ratings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    

}

exports.postOneRating = async (req, res, next) => {
  const { day, team, desc, ratings } = req.body;

  try {
    const equivalentData = await Rating.findOne({
      where: sequelize.where(
        sequelize.fn("DATE", sequelize.col("ratingDate")),
        day
      ),
    });
    if (equivalentData) {
      return res.json({
        status: false,
        message: "동일한 날짜에 두 경기 등록은 불가능합니다.",
      });
    }
  } catch (error) {
    const errorObj = new Error();
    errorObj.statusCode = 404;
    errorObj.message = "날짜 유효성 검사 중 실패했습니다.";
    return next(errorObj);
  }

  const ratingsArr = JSON.parse(ratings);

  const createArr = ratingsArr.map((ele) => {
    const oneObj = {
      ratingDate: day,
      ratingOppenent: team,
      ratingDescription: desc,
      rating: ele.rating,
      playerId: ele.playerId,
    };
    return oneObj;
  });

  try {
    const ratingData = await Rating.bulkCreate(createArr);
    return res.json({ message: "received data", data: ratingData });
  } catch (error) {
    const errorObj = new Error();
    errorObj.statusCode = 404;
    errorObj.message = "평점 데이터 저장 중 에러가 발생했습니다.";
    return next(errorObj);
  }
};

exports.playerPost = async (req, res, next) => {
  // postman으로 처리할 수 있는 서버 http
  const { playerName, backNumber, position, start_member_bol } = req.body;
  console.log(playerName, backNumber, position, start_member_bol);

  try {
    const playPostResult = await Player.create({
      playerName,
      backNumber,
      position,
      start_member_bol,
    });
    return res.json({
      status: true,
      message: "Success Create player",
      data: playPostResult,
    });
  } catch (error) {
    const errorObj = new Error();
    errorObj.message = "저장 중 에러";
    errorObj.statusCode = 404;
    return next(errorObj);
  }
};

exports.playerAllGet = async (req, res, next) => {
  // rating를 표현하기 위한 서버문
  try {
    const players = await Player.findAll();
    return res.json({
      status: true,
      message: "Get All Player Success",
      startMember: players.filter((ele) => {
        return ele.start_member_bol;
      }),
      substanceMember: players.filter((ele) => {
        return !ele.start_member_bol;
      }),
    });
  } catch (error) {
    const errorObj = new Error();
    (errorObj.message = "get 중 에러"), (errorObj.statusCode = 404);
    return next(error);
  }
};
