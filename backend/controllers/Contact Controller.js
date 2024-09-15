const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, requirement } = req.body;

    // Create a new contact
    const contact = new Contact({
      firstName,
      lastName,
      phone,
      email,
      requirement,
    });

    // Save the contact to the database
    await contact.save();

    res.status(201).json({
      success: true,
      data: contact,
      message: "Contact information saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving contact information",
      error: error.message,
    });
  }
};
