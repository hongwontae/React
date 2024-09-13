const JWT = require("jsonwebtoken");
const SK = require("./SecretKey");

module.exports = (req, res, next) => {

    const token = req.cookies.token

  if (!token) {
    return res.json({ status: false, message: "토큰 미존재" });
  }

  JWT.verify(token, SK, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.json({ status: false, message: "Token has expired" });
      }
      return res.json({ status: false, message: "토큰 유효성 검사 실패" });
    }

    return res.json({status : true, message : '유효성 검사 성공'});
    // return을 명시해야 해당 미들웨어를 정확히 종료하고 다음 미들웨어로 간다는 뜻이된다.
  });
};
