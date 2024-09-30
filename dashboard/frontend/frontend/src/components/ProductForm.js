import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "", // This should hold the category ID
    imageUrl: "",
    stock: "",
    specifications: "",
  });

  const [categories, setCategories] = useState([]); // State to hold categories

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/categories"
        ); // Adjust the URL to your categories endpoint
        setCategories(response.data); // Assume response.data is an array of category objects
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Convert price and stock to appropriate data types
    const productData = {
      ...product,
      price: parseFloat(product.price), // Ensure price is a number
      stock: parseInt(product.stock, 10), // Ensure stock is a number
    };

    try {
      console.log("Sending product data:", productData); // Log product data
      const response = await axios.post(
        "http://localhost:4000/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
        stock: "",
        specifications: "",
      });
    } catch (error) {
      console.error("Error adding product", error.response?.data); // Log the error response
      if (error.response && error.response.status === 400) {
        alert(`Bad Request: ${error.response.data.message}`);
      } else {
        alert("An error occurred while adding the product.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(product).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {key === "category" ? (
              <select
                name={key}
                value={product[key]}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name} {/* Assume category has a name property */}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={key === "price" || key === "stock" ? "number" : "text"}
                name={key}
                value={product[key]}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 w-full"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
