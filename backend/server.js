
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database"); // Import database connection
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Invoke database connection

// Route imports
const routes = require("./routes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewsRoutes");
const orderRoutes = require("./routes/orderRoutes");
const installationRoutes = require("./routes/installationRoutes");
const profileRoutes = require("./routes/profileRoutes");


app.use("/api", routes);
app.use("/api", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/installations", installationRoutes);
app.use("/api", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
