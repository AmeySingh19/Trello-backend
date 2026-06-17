const Board = require("../models/Board");
const deleteBoard = async (req, res) => {
  try {
    const board = await Board.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!board) {
      return res.status(404).json({
        message: "Board not found",
      });
    }

    await board.deleteOne();

    res.json({
      message: "Board deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateBoard = async (req, res) => {
  try {
    const board = await Board.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!board) {
      return res.status(404).json({
        message: "Board not found",
      });
    }

    board.title = req.body.title;

    await board.save();

    res.json(board);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
    const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({
      owner: req.user._id,
    });

    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createBoard = async (req, res) => {
  try {
    const { title } = req.body;

    const board = await Board.create({
      title,
      owner: req.user._id,
    });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,


};