// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Baye from "../componant/sherdcom.js/sectionpay";
// import ProductCard from "../componant/sherdcom.js/CardsServes";

// function Hardwood() {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(""); 
//   const [categories, setCategories] = useState([]); 

//   useEffect(() => {
//   // Fetch products based on selected category
//   const fetchProducts = () => {
//     axios
//       .get(`http://localhost:5000/api/products?category=Hardwood`) // الفئة محددة هنا بـ Hardwood
//       .then((response) => {
//         console.log(response.data);
//         setProducts(response.data); // تخزين المنتجات المفلترة في الحالة
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   fetchProducts(); // جلب المنتجات عند تحميل الكومبوننت
// }, [selectedCategory]);
// //  Re-fetch when selected category changes

// //   Fetch categories
// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/categories")
// //       .then((response) => {
// //         setCategories(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching categories:", error);
// //       });
// //   }, []);

//   return (
//     <>
//       <Baye
//         url={require("../imges/hardoodhero.png")}
//         titl={"Hardwood Flooring"}
//       />
//       <div className="contener">
//         <Link to="/">
//           <span>Home &gt;&gt;</span>
//         </Link>
//         Hardwood Flooring
//         <div className="explan">
//           <div className="explan-hardwood">
//             <p>
//               Whether you are looking to design or renovate your commercial or
//               residential space, hardwood flooring is a reliable option...
//             </p>
//           </div>
//           <div className="img-hardwood">
//             <img src={require("../imges/hardwoodexp.png")} alt="hard" />
//           </div>
//         </div>
      
//         {/* Products Section */}
//         <div className="product">
//           {products.map((product) => {
//             {
//               console.log(product.price);
//             }
//             return (
//               <ProductCard
//                 key={product._id}
//                 url={product.imageUrl}
//                 name={product.name}
//                 description={product.description}
//                 salePrice={product.price}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hardwood;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Hardwood() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get(`http://localhost:5000/api/products?category=Hardwood`)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Baye
        url={require("../imges/hardoodhero.png")}
        titl="Hardwood Flooring"
      />
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Hardwood Flooring</span>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                Hardwood Flooring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you are looking to design or renovate your commercial or
                residential space, hardwood flooring is a reliable option. It
                offers timeless beauty, durability, and can increase the value
                of your property. Our selection includes various wood types,
                finishes, and styles to suit any décor.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src={require("../imges/hardwoodexp.png")}
                alt="Hardwood flooring"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

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

export default Hardwood;
