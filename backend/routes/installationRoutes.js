// routes/installationRoutes.js
const express = require("express");
const router = express.Router();
const installationController = require("../controllers/installationController");

router.get("/", installationController.getAllInstallations);
router.post("/", installationController.createInstallation);

module.exports = router;
