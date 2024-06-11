/* eslint-disable no-undef */
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

module.exports = class History {
  constructor(name, title, content) {
    this.id = uuid.v4();
    this.name = name;
    this.title = title;
    this.content = content;
    this.currentDate = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  showHistory() {
    console.log(this);
  }

  save() {
    const p = path.join(
      path.join(
        path.dirname(require.main.filename),
        "../",
        "data",
        "history.json"
      )
    );
    fs.readFile(p, (err, fileContent) => {
      let history = [];
      if (!err) {
        history = JSON.parse(fileContent) || [];
      }
      history.push(this);

      fs.writeFile(p, JSON.stringify(history), (err) => {
        console.log(err);
      });
    });
  }

  fetchAll(cb) {
    const p = path.join(
      path.join(
        path.dirname(require.main.filename),
        "../",
        "data",
        "history.json"
      )
    );

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
