const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
    });
    res.json({
      message: "Task created successfully.",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Creating Task.",
      error: error.message,
    });
  }

  // const task = {
  //   id: Date.now(),
  //   title: req.body.title,
  //   completed: false,
  // };

  // tasks.push(task);
};

exports.deleteTask = async (req, res) => {
  console.log("Delete Task ID:", req.params.id); // Log the ID being deleted
  try {
    const id = req.params.id;

    // tasks = tasks.filter((task) => task.id !== id);
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    res.json({
      message: "Task Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Deleting Task.",
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    res.json({
      message: "Task updated successfully.",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
