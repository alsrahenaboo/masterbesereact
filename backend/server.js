// // app.js
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/database"); // استيراد الاتصال بقاعدة البيانات

// const routes = require("./routes");
// require("dotenv").config();
// const productRoutes = require("./routes/productRoutes");

// const reviewsRoutes = require("./routes/reviewsRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB(); // استدعاء الاتصال بقاعدة البيانات

// app.use("/api", routes);
// app.use("/api", productRoutes);

// app.use("/api/reviews", reviewsRoutes);
// app.use("/api/orders", orderRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
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
const reviewsRoutes = require("./routes/reviewsRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api", routes);
app.use("/api", productRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
