const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/Contact Controller");

// POST route to save contact information
router.post("/", createContact);

module.exports = router;