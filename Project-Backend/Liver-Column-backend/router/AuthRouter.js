const express = require('express');
const {body} = require('express-validator');

const AuthController = require('../controller/AuthController');
const isAuth = require('../util/isAuth');

const router = express.Router();

router.post('/authentication', [
    body('email').isEmail().withMessage('이메일 형태를 갖춰주세요'),
    body('password').isLength({min : 10}).withMessage('비밀번호는 10개를 넘어야 합니다.')
], AuthController.authentication);

router.post('/logout', isAuth, AuthController.authLogout)


module.exports = router;