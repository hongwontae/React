const Buttons = require("../models/buttons");

exports.postButton = async (req, res, next) => {
  const data = req.body;
  const [obj] = data;

  const buttons = await Buttons.findAll();

  if(buttons.length > 10){
    return res.json({message : '저장 한계치에 도달했습니다. 포메이션 데이터를 삭제 후에 추가하시길 바랍니다.'})
  }

  if (buttons.length === 0) {
    Buttons.create(obj).then((result) => {
      res.json({ message: "Success Formation Save" });
    });
  } else {
    const charData = obj.title.charAt(obj.title.length - 1);
    Buttons.create({ title: `Formation-${+charData + 1}` }).then((result) => {
      res.json({ message: "Success Formation Save" });
    });
  }
};

exports.getButton = async (req, res, next) => {
  const buttons = await Buttons.findAll();
  if (buttons.length === 0) {
    res.json([{ id: 1, message: "No Save Data" }]);
  } else {
    res.json(buttons);
  }
};
