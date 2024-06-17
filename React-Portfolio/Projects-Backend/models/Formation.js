const fs = require("fs");
const path = require("path");

module.exports = class Formation {
  constructor(player, subPlayer) {
    this.player = player;
    this.subPlayer = subPlayer;
  }

  check() {
    console.log(this);
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "../",
      "data",
      "FormationData.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let formation = [];
      if (!err) {
        formation = JSON.parse(fileContent) || [];
      }
      formation.push(this);

      fs.writeFile(p, JSON.stringify(formation), (err) => {
        console.log(err);
      });
    });
  }

  fetchOne(cb, num){
    const p = path.join(
      path.join(
        path.dirname(require.main.filename),
        "../",
        "data",
        "FormationData.json"
      )
    );
    fs.readFile(p, (err, fileContent)=>{
      if(err){
        return []
      }

      const fileData = JSON.parse(fileContent);

      cb(fileData[num])
      
    })

  }

};
