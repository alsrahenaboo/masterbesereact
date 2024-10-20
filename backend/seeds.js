const mongoose = require("mongoose");
const connectDB = require("./config/database"); // تأكد من المسار الصحيح لاتصال قاعدة البيانات
const Category = require("./models/Category");
const Product = require("./models/Product");
require("dotenv").config();

const categorySeedData = [
  {
    name: "Carpet",
    description: "Soft and comfortable carpet flooring",
    imageUrl: "https://example.com/carpet.jpg",
    isActive: true,
  },
  {
    name: "Hardwood",
    description: "Classic and durable hardwood flooring options",
    imageUrl: "https://example.com/hardwood.jpg",
    isActive: true,
  },
  {
    name: "Laminate",
    description: "Affordable and easy-to-maintain laminate flooring",
    imageUrl: "https://example.com/laminate.jpg",
    isActive: true,
  },
  {
    name: "Vinyl",
    description: "Versatile and water-resistant vinyl flooring solutions",
    imageUrl: "https://example.com/vinyl.jpg",
    isActive: true,
  },
  {
    name: "Tiles", // الفئة الجديدة
    description: "Durable and stylish tiles for flooring",
    imageUrl: "https://example.com/tiles.jpg",
    isActive: true,
  },
];

const productSeedData = [
  // Carpet Products
  ...Array(12)
    .fill()
    .map((_, i) => ({
      name: "Europe Parks Collection 8MM Engineered Hardwood – Saxon",
      description: "High-quality carpet flooring",
      price: 4.99,
      category: "Carpet",
      imageUrl: `../imges/carp${i + 1}.png`,
      stock: 100,
      isActive: true,
      specifications: "8MM thickness",
      salePrice: 3.49,
    })),

  // Hardwood Products
  ...Array(12)
    .fill()
    .map((_, i) => ({
      name: "Europe Parks Collection 8MM Engineered Hardwood – Saxon",
      description: "Premium engineered hardwood flooring",
      price: 4.99,
      category: "Hardwood",
      imageUrl: `../imges/hard${i + 1}.png`,
      stock: 100,
      isActive: true,
      specifications: "8MM thickness",
      salePrice: 3.49,
    })),

  // Laminate Products
  ...Array(24)
    .fill()
    .map((_, i) => ({
      name: "Europe Parks Collection 8MM Engineered Hardwood – Saxon",
      description: "Durable laminate flooring",
      price: 4.99,
      category: "Laminate",
      imageUrl: `../imges/lam${(i % 12) + 1}.png`,
      stock: 100,
      isActive: true,
      specifications: "8MM thickness",
      salePrice: 3.49,
    })),

  // Vinyl Products
  ...Array(12)
    .fill()
    .map((_, i) => ({
      name: "Europe Parks Collection 8MM Engineered Hardwood – Saxon",
      description: "Versatile vinyl flooring",
      price: 4.99,
      category: "Vinyl",
      imageUrl: `../imges/vin${(i % 4) + 1}.png`,
      stock: 100,
      isActive: true,
      specifications: "8MM thickness",
      salePrice: 3.49,
    })),
];

async function seedDatabase() {
  try {
    // اتصال بقاعدة البيانات
    await connectDB();

    // حذف البيانات الحالية
    // await Category.deleteMany({});
    // await Product.deleteMany({});

    // إضافة الفئات
    const categories = await Category.create(categorySeedData);

    // إضافة المنتجات وربط الفئات
    const products = productSeedData.map((product) => {
      const category = categories.find((c) => c.name === product.category);
      return { ...product, category: category._id };
    });
    await Product.create(products);

    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
}

seedDatabase();
