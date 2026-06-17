const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const {
  createCard,
  getCardsByList,
} = require("../controllers/cardController");

const router = express.Router();

router.post("/", protect, createCard);
router.get("/:listId", protect, getCardsByList);
router.delete("/:id", protect, deleteCard);
router.put("/:id/move", protect, moveCard);
module.exports = {router,
    deleteCard,


}