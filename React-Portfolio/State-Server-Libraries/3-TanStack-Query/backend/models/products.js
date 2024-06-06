/* eslint-disable no-undef */

const fs = require("fs");
const path = require("path");
const uuid = require('uuid')

module.exports = class Product {
  constructor(t, c) {
    this.title = t;
    this.content = c;
    this.id = uuid.v4();
    console.log(typeof this.id);
  }

  check() {
    console.log(this);
  }

  save() {
    const p = path.join(
      path.join(
        path.dirname(require.main.filename),
        "../",
        "data",
        "product.json"
      )
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent) || [];
      }
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
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
        "product.json"
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
