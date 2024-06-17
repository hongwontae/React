const Formation = require('../models/Formation')

exports.postFormation = (req, res, next)=>{
    const [data1, data2] = req.body;
    const formation = new Formation(data1, data2)
    formation.save();
}

exports.getFormation = (req, res, next)=>{
    const formation = new Formation();
    const num = req.query.num;
    formation.fetchOne((data)=>{
        res.json(data)
    }, num)

 
}