const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const play_result_db = require("./model/play-result");
const admin_user = require("./model/admin-user");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require('cookie-parser')

const PlayResultRouter = require("./router/PlayResultRouter");
const AdmintRouter = require("./router/AdminRouter");
const AuthRouter = require("./router/AuthRouter");
const isAuth = require("./util/isAuth");

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

app.use("/admin", AdmintRouter);
app.use("/auth", AuthRouter);

app.use('/auth/single/check', isAuth);
app.use('/auth/single', AuthRouter )

app.use((errors, req, res, next) => {
  console.log(errors);
  return res.json({ message: "Error 발생", errorData: errors });
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connect Success");
  });

// {force : true}
