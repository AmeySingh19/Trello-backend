const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const cardRoutes = require("./src/routes/cardRoutes");
const boardRoutes = require("./src/routes/boardRoutes");
const listRoutes = require("./src/routes/listRoutes");
dotenv.config();
connectDB();
const app = express();
const authRoutes = require("./src/routes/authRoutes");
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/boards", boardRoutes);
app.use("/lists", listRoutes);
app.use("/cards", cardRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});