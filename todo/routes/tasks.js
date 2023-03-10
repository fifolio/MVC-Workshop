const router = require("express").Router();
const TaskController = require("../controllers/tasks");

// find/show all tasks
router.get("/", TaskController.index);

// Create
router.post("/create", TaskController.create);

// Delete
router.delete("/delete/:id", TaskController.delete);

// Edit
router.get("/update/:id", TaskController.edit);

// Update
router.put("/update/:id", TaskController.update);

module.exports = router;
