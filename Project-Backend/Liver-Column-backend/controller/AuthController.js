const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const AdminUser = require("../model/admin-user");
const JWT = require("jsonwebtoken");
const SK = require("../util/SecretKey");

exports.authentication = async (req, res, next) => {
  const validatorOBJ = validationResult(req);

  if (!validatorOBJ.isEmpty()) {
    const validatorError = new Error("express-validator 통과 실패");
    validatorError.reason = validatorOBJ.array();
    validatorError.satausCode = 404;
    return next(validatorError);
  }

  const { email, password } = req.body;

  try {
    const matchUser = await AdminUser.findOne({ where: { email } });
    if (!matchUser) {
      throw new Error("아이디가 일치하지 않습니다.");
    }

    const matchPassword = await bcrypt.compare(password, matchUser.password);

    if (!matchPassword) {
      throw new Error("패스워드가 일치하지 않습니다.");
    }

    const token = JWT.sign(
      { email: matchUser.email, password: matchUser.password},
      SK
    );

    res.cookie('token', token,{
        httpOnly : true,
        secure : true,
        // sameSite : 'None',
        maxAge : 3600000
    })

    return res
      .json({
        message: "Login Success",
        someData: matchUser,
      })

  } catch (error) {
    error.statusCode = 404;
    return next(error);
  }
};

exports.authLogout = (req, res, next)=>{
  console.log('authLogioutController')

  res.clearCookie('token', {
    httpOnly : true,
    sucure : true,
  })
  return res.json({message : 'Cookie Clear'})
}