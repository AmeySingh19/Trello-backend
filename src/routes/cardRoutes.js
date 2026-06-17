const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const {
  createCard,
} = require("../controllers/cardController");

const router = express.Router();

router.post("/", protect, createCard);

module.exports = router;