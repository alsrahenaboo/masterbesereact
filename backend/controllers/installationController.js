// controllers/installationController.js
const Installation = require("../models/Installation");

exports.getAllInstallations = async (req, res) => {
  try {
    const installations = await Installation.find();
    res.json(installations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInstallation = async (req, res) => {
  const installation = new Installation(req.body);
  try {
    const newInstallation = await installation.save();
    res.status(201).json(newInstallation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
