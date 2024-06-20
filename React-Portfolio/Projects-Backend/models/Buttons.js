const fs = require('fs');
const path = require('path');

module.exports = class Buttons{
    constructor(buttons){
        this.buttons = buttons
    }

    check(){
        console.log(this)
    };

    save(){
        const p = path.join(
            path.dirname(require.main.filename),
            "../",
            "data",
            "Buttons.json"
          );
          fs.readFile(p, (err, fileContent) => {
            let buttons = [];
            if (!err) {
              buttons = JSON.parse(fileContent) || [];
            }
            buttons.push(this);
      
            fs.writeFile(p, JSON.stringify(buttons), (err) => {
              console.log(err);
            });
          });
    }

    fetchAll(cb){
        const p = path.join(
            path.join(
              path.dirname(require.main.filename),
              "../",
              "data",
              "Buttons.json"
            )
          );
          fs.readFile(p, (err, fileContent)=>{
            if(err){
              return []
            }
      
            const fileData = JSON.parse(fileContent);
      
            cb(fileData)
            
          })
    }

}