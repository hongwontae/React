const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const play_result_db = require("./model/play-result");
const admin_user = require("./model/admin-user");
const Player = require('./model/player');
const Rating = require('./model/rating')
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

app.use("/get", PlayResultRouter);
app.use("/post", upload.single("image"), PlayResultRouter);

app.use('/modify',  PlayResultRouter)
app.use('/act/modi', upload.single('image'), PlayResultRouter)

app.use('/rating', PlayRatingRouter);
app.use('/rating/post', PlayRatingRouter);

app.use('/player', PlayRatingRouter);
app.use('/player/get', PlayRatingRouter);

app.use("/admin", AdmintRouter);
app.use("/auth", AuthRouter);

app.use('/auth/single/check', isAuth);
app.use('/auth/single', AuthRouter )

app.use('/delete', DeleteRouter);

app.use('/test',  async (req, res, next)=>{
  await sequelize.query('DROP TABLE IF EXISTS `ratings`')
})

app.use((errors, req, res, next) => {
  console.log(errors);
  return res.json({ message: errors.message, errorData: errors });
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connect Success");
  });

