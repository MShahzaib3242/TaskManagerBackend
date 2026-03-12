const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.get("/", authMiddleware, taskController.getTasks);
router.post("/", authMiddleware, taskController.createTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);
router.put("/:id", authMiddleware, taskController.updateTask);

module.exports = router;
