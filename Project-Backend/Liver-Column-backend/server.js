const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const play_result_db = require("./model/play-result");
const admin_user = require("./model/admin-user");
const Player = require('./model/player');
const Rating = require('./model/rating')
const RatingReport = require('./model/rating-report') 
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require('cookie-parser')

const PlayResultRouter = require("./router/PlayResultRouter");
const AdmintRouter = require("./router/AdminRouter");
const AuthRouter = require("./router/AuthRouter");
const DeleteRouter = require('./router/DeleteRouter')
const isAuth = require("./util/isAuth");
const PlayRatingRouter = require('./router/PlayRatingRouter');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

    app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
    );

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// 경기 결과 http
app.use("/get", PlayResultRouter);
app.use("/post", upload.single("image"), PlayResultRouter);

app.use('/modify',  PlayResultRouter)
app.use('/act/modi', upload.single('image'), PlayResultRouter)

app.use('/delete', DeleteRouter);


// 경기 평점 http
app.use('/rating', PlayRatingRouter);
app.use('/rating/post', PlayRatingRouter);

app.use('/player', PlayRatingRouter);
app.use('/player/get', PlayRatingRouter);


// 로그인 및 관리자 생성 및 route 보호 http
app.use("/admin", AdmintRouter);
app.use("/auth", AuthRouter);

app.use('/auth/single/check', isAuth);
app.use('/auth/single', AuthRouter )


// 총합 에러 관리 핸들러
app.use((errors, req, res, next) => {
  console.log(errors);
  return res.json({ message: errors.message, errorData: errors });
});

// sequelize + server 가동
sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connect Success");
  });

