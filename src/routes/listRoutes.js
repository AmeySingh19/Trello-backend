const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const {
  createList,
} = require("../controllers/listController");

const router = express.Router();

router.post("/", protect, createList);

module.exports = router;