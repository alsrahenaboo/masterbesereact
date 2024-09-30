const mongoose = require("mongoose");

const installationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // المستخدم الذي طلب الخدمة
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, // المنتج الذي سيتم تركيبه
    address: { type: String, required: true }, // العنوان الذي سيتم التركيب فيه
    installationDate: { type: Date, required: true }, // تاريخ موعد التركيب
    technician: { type: String }, // اسم الفني المسؤول عن التركيب
    status: { type: String, default: "Scheduled" }, // حالة طلب التركيب (Scheduled, Completed, etc.)
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Installation", installationSchema);
