import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Tiles() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // حالة سلة المشتريات

  useEffect(() => {
    // جلب المنتجات من الخادم (Tiles)
    const fetchProducts = () => {
      axios
        .get("http://localhost:5000/api/products?category=Tiles")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts(); // جلب المنتجات عند تحميل المكون
  }, []);

  // دالة لإضافة المنتج إلى السلة
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // تحديث الكمية إذا كان المنتج موجود بالفعل في السلة
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // إضافة المنتج إلى السلة مع كمية ابتدائية 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // دالة لتحديث كمية المنتج في السلة
  const updateQuantity = (productId, amount) => {
    setCart(
      cart.map((item) =>
        item._id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) } // التأكد من عدم وجود كميات سلبية
          : item
      )
    );
  };

  // دالة لعرض المنتجات في السلة
  const renderCart = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        {cart.map((item) => (
          <div
            key={item._id}
            className="mb-4 flex justify-between items-center"
          >
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.quantity * item.price}</p>
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => updateQuantity(item._id, 1)}
              >
                +
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => updateQuantity(item._id, -1)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Baye url={require("../imges/hardoodhero.png")} titl="Tiles Flooring" />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Tiles Flooring</span>
        </nav>

        {/* Explanation Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                Tiles Flooring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tiles are a popular flooring option due to their durability,
                ease of maintenance, and aesthetic appeal. Available in various
                materials such as ceramic, porcelain, and stone, tiles are
                perfect for areas prone to moisture like kitchens and bathrooms.
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                What Is Tiles Flooring?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Tiles flooring involves the installation of tiles made from
                different materials like ceramic, porcelain, and glass. Known
                for their strength, resistance to wear, and easy maintenance,
                tiles are widely used in both residential and commercial spaces.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src={require("../imges/tils.png")}
                alt="Tiles section"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              url={product.imageUrl}
              name={product.name}
              description={product.description}
              salePrice={product.price}
              onAddToCart={() => addToCart(product)} // إضافة المنتج إلى السلة عند النقر
            />
          ))}
        </div>

        {/* عرض سلة المشتريات */}
        {renderCart()}
      </div>
    </div>
  );
}

export default Tiles;
