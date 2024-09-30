const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin"); // Adjust the path according to your project structure

const MONGO_URI =
  "mongodb+srv://salemawwad2:Abood123@cluster0.jom0e.mongodb.net/flooring_db?retryWrites=true&w=majority&appName=Cluster0";

const seedAdmin = async () => {
  try {
    // Connect to the database
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("123", 10);

    // Create the admin user
    const admin = new Admin({
      username: "admin",
      password: hashedPassword, // Store the hashed password
    });

    // Save the admin user
    await admin.save();
    console.log("Admin user created successfully!");

    // Close the database connection
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
};

seedAdmin();
