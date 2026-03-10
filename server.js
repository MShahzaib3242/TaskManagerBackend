const express = require("express");
const connectDB = require("./config/db");

// All Routes
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", taskRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend API Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
