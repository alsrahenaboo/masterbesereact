
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllUsers);

router.delete("/:id", userController.softDeleteUser);

router.put("/activate/:id", userController.activateUser);

router.put("/deactivate/:id", userController.deactivateUser);


module.exports = router;