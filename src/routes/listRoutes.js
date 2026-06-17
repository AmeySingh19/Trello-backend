const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const {
  createList,
} = require("../controllers/listController");

const router = express.Router();

router.post("/", protect, createList);
router.get("/:boardId", protect, getListsByBoard);
router.put("/:id", protect, updateList);
router.delete("/:id", protect, deleteList);
module.exports = router;