const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const play_result_db = require('./model/play-result')
const cors = require('cors');
const multer = require('multer');
const path = require('path')

const PlayResultRouter = require('./router/PlayResultRouter')

const storage = multer.diskStorage({
    destination : (req, res, cb)=>{
        cb(null, 'uploads/')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage})

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/get',PlayResultRouter);
app.use('/post', upload.single('image'), PlayResultRouter);



sequelize.sync().then(()=>{
    app.listen(5000);
}).then(()=>{
    console.log('Connect Success')
})

// {force : true}
