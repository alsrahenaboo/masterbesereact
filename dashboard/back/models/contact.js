// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     requirement: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    requirement: { type: String, required: true },
    isActive: { type: Boolean, default: true }, // Status field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
