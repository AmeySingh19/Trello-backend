const Card = require("../models/Card");

const createCard = async (req, res) => {
  try {
    const { title, description, listId } = req.body;

    const card = await Card.create({
      title,
      description,
      list: listId,
    });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getCardsByList = async (req, res) => {
  try {
    const cards = await Card.find({
      list: req.params.listId,
    }).sort({ position: 1 });

    res.json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        message: "Card not found",
      });
    }

    card.title = req.body.title || card.title;

    card.description =
      req.body.description || card.description;

    await card.save();

    res.json(card);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        message: "Card not found",
      });
    }

    await card.deleteOne();

    res.json({
      message: "Card deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createCard,
  getCardsByList,
  updateCard,

};