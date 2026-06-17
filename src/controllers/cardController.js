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

module.exports = {
  createCard,
};