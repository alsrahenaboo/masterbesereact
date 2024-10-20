import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Laminat() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for Laminate category
    const fetchProducts = () => {
      axios
        .get(`http://localhost:5000/api/products?category=Laminate`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts(); // Fetch products on component mount
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Baye url={require("../imges/laminat.png")} titl="Laminat Flooring" />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Laminat Flooring</span>
        </nav>

        {/* Explanation Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                Laminat Flooring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Laminate flooring is an excellent choice when you have a
                restricted budget but still want your home to look fabulous.
                These days you can find laminate flooring that not only mimics
                the look of its natural counterparts but also their texture,
                making it even more appealing.
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                What Is Laminat Flooring?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Laminate flooring is made with wooden materials that are bonded
                with pressure and resins. The top layer is a high definition
                image of the natural product it mimics. It’s hassle-free and
                easy to clean.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src={require("../imges/lm.png")}
                alt="Laminate Flooring"
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
              id={product._id}
              url={product.imageUrl}
              name={product.name}
              description={product.description}
              salePrice={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Laminat;
