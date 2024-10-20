
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Carpet() {
   const [products, setProducts] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("");
   const [categories, setCategories] = useState([]);

   useEffect(() => {
     // Fetch products based on selected category
     const fetchProducts = () => {
       axios
         .get(`http://localhost:5000/api/products?category=Carpet`)
         .then((response) => {
           console.log(response.data);
           setProducts(response.data);
         })
         .catch((error) => {
           console.error("Error fetching products:", error);
         });
     };

     fetchProducts(); // Fetch products on component mount
   }, [selectedCategory]); // Re-fetch when selected category changes (if applicable)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Baye url={require("../imges/carpet.png")} titl="Carpet Flooring" />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Carpet Flooring</span>
        </nav>

        {/* Explanation Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                Carpet Flooring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Floor carpet is a type of flooring used to cover the interior
                floors of buildings, whether they are homes, offices, or public
                places. Carpets are soft, warm, and come in a variety of colors
                and designs, making them a popular choice for improving the
                aesthetic appeal and comfort of different spaces.
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                What Is Carpet Flooring?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Carpet flooring is a type of floor covering used in interior
                spaces, made from woven or tufted fibers. It is commonly
                installed in homes, offices, and public buildings due to its
                comfort, insulation properties, and aesthetic appeal.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src={require("../imges/carpsec.png")}
                alt="Carpet section"
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carpet;
