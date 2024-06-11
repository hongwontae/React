/* eslint-disable no-undef */
const express = require("express");
const historyController = require("../controller/history");

const router = express.Router();

router.get("/showHistory", historyController.getHistory);

router.post("/resister", historyController.postHistory);

module.exports = router;
