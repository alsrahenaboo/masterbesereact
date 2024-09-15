// app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database"); // استيراد الاتصال بقاعدة البيانات
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // استدعاء الاتصال بقاعدة البيانات

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
