const PlayResult = require("../model/play-result");

const FileDelete = require('../util/file-delete')

exports.deleteOne = async (req, res, next) => {
  const id = req.body.id;

  let info;
  let fileDeleteData

  try {
    const deleteItem = await PlayResult.findByPk(id);
    fileDeleteData = await FileDelete(deleteItem.imagePath)
    info = await deleteItem.destroy();
    
  } catch (error) {
    const errorData = new Error();
    errorData.status = false
    errorData.message = 'Delete 처리 중 에러 발생'
    return next(errorData);
  }

  return res.json({
    status: true,
    message: "Delete Success",
    data: info,
    fileDeleteData
  });
};
