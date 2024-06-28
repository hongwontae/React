const Buttons = require("../models/buttons");

exports.postButton = async (req, res, next) => {
  const data = req.body;
  const [obj] = data;

  Buttons.create(obj).then((result) => {
    res.json({ message: "Success Formation Save" });
  });
};

exports.getButton = async (req, res, next) => {
  const buttons = await Buttons.findAll();
  if (buttons.length === 0) {
    res.json([{ id: 1, message: "No Save Data" }]);
  } else {
    res.json(buttons);
  }
};


