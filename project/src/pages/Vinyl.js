import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Vinyl() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch vinyl products from API
    const fetchProducts = () => {
      axios
        .get(`http://localhost:5000/api/products?category=Vinyl`)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data); // Set fetched products to state
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts(); // Fetch products on component mount
  }, []); // No dependencies, runs only once on mount

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Section for Vinyl Flooring */}
      <Baye url={require("../imges/vinlesec.png")} titl={"Vinyl Flooring"} />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Vinyl Flooring</span>
        </nav>

        {/* Explanation Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                Vinyl Flooring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vinyl is a versatile, practical, and affordable flooring option
                that offers durability as few other flooring materials can. It’s
                available in numerous colours and patterns and requires little
                to no maintenance, making it perfect for busy homes and
                commercial spaces.
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                What Is Vinyl Flooring?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Vinyl is a popular flooring material made using synthetics such
                as PVC, fiberglass, and plasticizers. It’s durable,
                water-resistant, and suitable for high-traffic areas.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src={require("../imges/vinhero.png")}
                alt="Vinyl section"
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

export default Vinyl;
