const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

// GET all contacts
router.get("/contacts", contactController.getContacts);

// PUT to update a contact
router.put("/contacts/:id", contactController.updateContact);

// DELETE a contact
router.delete("/contacts/:id", contactController.deleteContact);

// PUT to toggle active status of a contact
router.put("/contacts/:id/toggle-status", contactController.toggleActiveStatus);


module.exports = router;
