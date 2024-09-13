const express = require("express");
const { body } = require("express-validator");
const AdminUser = require("../model/admin-user");
const AdminController = require("../controller/AdminController");

const router = express.Router();

router.post(
  "/create",
  [
    body("email")
      .isEmail()
      .withMessage("이메일 형태를 갖춰주세요")
      .custom(async (value, { req }) => {
        const matchEmailUser = await AdminUser.findOne({
          where: { email: value },
        });
        if (matchEmailUser) {
          console.log('here????')
          throw new Error('일치하는 이메일이 존재합니다. 다른 이메일 부탁드릴게요');
          // next(err) err은 항상 에러 객체여야 합니다.
          // 비동기 함수 내부에서는 throw를 던져야 에러 처리 미들웨어로 향합니다.
        }
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 10 }).withMessage('비밀번호가 10자를 넘어야 합니다.'),
  ],
  AdminController.createUser
);

module.exports = router;
