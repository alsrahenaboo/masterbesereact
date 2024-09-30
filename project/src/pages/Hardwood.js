import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Hardwood() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // To manage selected category
  const [categories, setCategories] = useState([]); // Manage categories

  useEffect(() => {
    // Fetch products based on selected category
    const fetchProducts = () => {
      axios
        .get("http://localhost:5000/api/products?category=Hardwood")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts();
  }, [selectedCategory]); // Re-fetch when selected category changes

  // Fetch categories
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/categories")
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //     });
  // }, []);

  return (
    <>
      <Baye
        url={require("../imges/hardoodhero.png")}
        titl={"Hardwood Flooring"}
      />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link>
        Hardwood Flooring
        <div className="explan">
          <div className="explan-hardwood">
            <p>
              Whether you are looking to design or renovate your commercial or
              residential space, hardwood flooring is a reliable option...
            </p>
          </div>
          <div className="img-hardwood">
            <img src={require("../imges/hardwoodexp.png")} alt="hard" />
          </div>
        </div>
      
        {/* Products Section */}
        <div className="product">
          {products.map((product) => {
            {
              console.log(product.price);
            }
            return (
              <ProductCard
                key={product._id}
                url={product.imageUrl}
                name={product.name}
                description={product.description}
                salePrice={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Hardwood;
