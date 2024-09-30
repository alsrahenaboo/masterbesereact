// src/components/Products.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    stock: "",
    specifications: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:4000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
      stock: product.stock,
      specifications: product.specifications,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:4000/api/products/${editingProduct}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchProducts();
      setEditingProduct(null);
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
        stock: "",
        specifications: "",
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:4000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-6 pl-80">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        {editingProduct ? (
          <form onSubmit={handleUpdate} className="mb-6">
            <h3 className="text-xl font-bold mb-2">Edit Product</h3>
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "price" || key === "stock" ? "number" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Update Product
            </button>
            <button
              type="button"
              onClick={() => {
                setEditingProduct(null);
                setFormData({
                  name: "",
                  description: "",
                  price: "",
                  category: "",
                  imageUrl: "",
                  stock: "",
                  specifications: "",
                });
              }}
              className="ml-2 bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
            >
              Cancel
            </button>
          </form>
        ) : (
          <h3 className="text-xl font-bold mb-2">Add New Product</h3>
          // You can add a form for adding new products here
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-lg">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <p className="text-sm">Stock: {product.stock}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white rounded px-2 py-1 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
