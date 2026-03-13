const mongoose = require("mongoose");
const Task = require("./models/taskModel");

const MONGO_URI = "mongodb://127.0.0.1:27017/taskmanager";

const USER_1 = "69affecb6299e356137e7665";
const USER_2 = "69affeea01054f2f0b634f5a";

const tasks = [
  { title: "Learn Node.js", completed: false, user: USER_1 },
  { title: "Learn Express.js", completed: false, user: USER_1 },
  { title: "Study MongoDB queries", completed: true, user: USER_1 },
  { title: "Implement JWT authentication", completed: false, user: USER_1 },
  { title: "Build REST APIs", completed: false, user: USER_1 },
  { title: "Understand pagination", completed: true, user: USER_1 },
  { title: "Implement filtering in APIs", completed: false, user: USER_1 },
  { title: "Add search functionality", completed: false, user: USER_1 },
  { title: "Learn backend architecture", completed: true, user: USER_1 },
  { title: "Study service layer pattern", completed: false, user: USER_1 },

  { title: "Build authentication system", completed: false, user: USER_2 },
  { title: "Learn password hashing", completed: true, user: USER_2 },
  { title: "Understand JWT tokens", completed: false, user: USER_2 },
  { title: "Implement protected routes", completed: false, user: USER_2 },
  { title: "Learn MongoDB aggregation", completed: true, user: USER_2 },
  { title: "Study backend validation", completed: false, user: USER_2 },
  { title: "Implement API logging", completed: false, user: USER_2 },
  { title: "Learn Docker basics", completed: true, user: USER_2 },
  { title: "Understand Redis caching", completed: false, user: USER_2 },
  { title: "Study system design", completed: false, user: USER_2 },
];

async function seedTasks() {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected. Seeding tasks...");

    await Task.insertMany(tasks);

    console.log("Tasks seeded successfully.");

    process.exit();
  } catch (error) {
    console.error("Error seeding feed:", error);
    process.exit(1);
  }
}

seedTasks();
