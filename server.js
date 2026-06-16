const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
dotenv.config();
connectDB();
const app = express();
const authRoutes = require("./src/routes/authRoutes");
app.use(express.json());
app.use("/auth", authRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});