const express = require("express");

const categoryRoutes = require("./categoryRoutes");
const installationRoutes = require("./installationRoutes");
const authRoutes = require("./authRoutes");

const contactRoutes = require("./Contact Route");
// const productRoutes = require("./productRoutes");
const app = express();
const router = express.Router();

// Define routes
router.use("/categories", categoryRoutes);
router.use("/installations", installationRoutes);
router.use("/auth", authRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
