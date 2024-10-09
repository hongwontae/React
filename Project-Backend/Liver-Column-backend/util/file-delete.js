const fs = require('fs');
const path = require('path');

async function FileDelete(filePath){

    const fileArr = filePath.split('/');

    const fileLocation = path.join(__dirname, '..', fileArr[0], fileArr[1]);

    const data = fs.unlink(fileLocation, (err)=>{
        console.log(err);
        return err;
    });

    return data;
}


module.exports = FileDelete;