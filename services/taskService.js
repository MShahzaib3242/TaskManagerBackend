const Task = require("../models/taskModel");

exports.getUserTasks = async (userId, query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const skip = (page - 1) * limit;

  const filter = {
    user: userId,
  };

  if (query.completed !== undefined) {
    filter.completed = query.completed === "true";
  }

  if (query.search) {
    filter.title = {
      $regex: query.search,
      $options: "i",
    };
  }

  const sort = query.sort || "createdAt";

  const tasks = await Task.find(filter).sort(sort).skip(skip).limit(limit);

  const total = await Task.countDocuments(filter);

  return {
    tasks,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
    },
  };
};

exports.createTask = async (userId, data) => {
  return await Task.create({
    title: data.title,
    completed: data.completed || false,
    user: userId,
  });
};

exports.updateTask = async (taskId, userId, data) => {
  const task = await Task.findOne({
    _id: taskId,
    user: userId,
  });

  if (!task) {
    throw new Error("Task not found or unauthorized.");
  }

  task.title = data.title ?? task.title;
  task.completed = data.completed ?? task.completed;

  return await task.save();
};

exports.deleteTask = async (taskId, userId) => {
  const task = await Task.findOne({
    _id: taskId,
    user: userId,
  });

  if (!task) {
    throw new Error("Task not found or unauthorized.");
  }

  await task.deleteOne();
};
