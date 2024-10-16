const AdminUser = require('../model/admin-user');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next)=>{


    const validatorError = validationResult(req);

    if(!validatorError.isEmpty()){
        const validatorErrorMessage = new Error('express-validator 검사 중 에러 발생');
        validatorErrorMessage.reason = validatorError.array();
        validatorErrorMessage.statusCode = 404
        return next(validatorErrorMessage);
    }

    const {email, password} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const createUser = await AdminUser.create({email, password : hashPassword});
        return res.json({message : '관리자 생성 성공', data : createUser})
    } catch (error) {
        error.statusCode = 404;
        error.message = '유효성 검사에는 성공했으나 모종의 이유로 생성에는 실패'
        return next(error)
    }


}