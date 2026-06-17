const List = require("../models/List");
const createList = async (req, res) => {
  try {
    const { title, boardId } = req.body;

    const list = await List.create({
      title,
      board: boardId,
    });

    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getListsByBoard = async (req, res) => {
  try {
    const lists = await List.find({
      board: req.params.boardId,
    }).sort({ position: 1 });

    res.json(lists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({
        message: "List not found",
      });
    }

    list.title = req.body.title;

    await list.save();

    res.json(list);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({
        message: "List not found",
      });
    }

    await list.deleteOne();

    res.json({
      message: "List deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createList,
  getListsByBoard,
  updateList,
  deleteList,
};