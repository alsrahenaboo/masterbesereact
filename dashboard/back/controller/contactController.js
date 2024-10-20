const Contact = require("../models/contact");

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch contacts", error: error.message });
  }
};

// Update a contact
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const contact = await Contact.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact updated successfully", contact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update contact", error: error.message });
  }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete contact", error: error.message });
  }
};

// Toggle active status
exports.toggleActiveStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    contact.isActive = !contact.isActive; // Toggle the active status
    await contact.save();

    res.status(200).json({ message: "Status toggled successfully", contact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to toggle status", error: error.message });
  }
};
