


// import React, { useState } from "react";
// import { XCircle } from "lucide-react";

// function ProductCard({ id, url, name, description, salePrice }) {
//   const [showModal, setShowModal] = useState(false);

//   const addToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingItemIndex = cartItems.findIndex((item) => item.id === id);

//     if (existingItemIndex !== -1) {
//       cartItems[existingItemIndex].quantity += 1;
//     } else {
//       cartItems.push({ id, url, name, description, salePrice, quantity: 1 });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     // Toast notification
//     const toast = document.createElement("div");
//     toast.className =
//       "fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out";
//     toast.textContent = "Item added to cart!";
//     document.body.appendChild(toast);
//     setTimeout(() => {
//       toast.style.transform = "translateY(150%)";
//       setTimeout(() => document.body.removeChild(toast), 500);
//     }, 2000);
//   };

//   const ImageModal = () => (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
//         showModal ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//       onClick={() => setShowModal(false)}
//     >
//       <div className="relative max-w-4xl max-h-[90vh] mx-4 bg-white rounded-xl overflow-hidden">
//         <button
//           className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
//           onClick={(e) => {
//             e.stopPropagation();
//             setShowModal(false);
//           }}
//         >
//           <XCircle className="w-8 h-8" />
//         </button>
//         <img src={url} alt={name} className="w-full h-full object-contain" />
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
//         <div
//           className="relative cursor-pointer"
//           onClick={() => setShowModal(true)}
//         >
//           <img
//             src={url}
//             alt={name}
//             className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
//           />
//           <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
//         </div>

//         <div className="p-4">
//           <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//             {name}
//           </h2>
//           <p className="text-sm md:text-base text-gray-600 mb-3">
//             {description}
//           </p>
//           <p className="text-lg md:text-xl font-bold text-green-600 mb-3">
//             ${salePrice.toFixed(2)} / SQ.F.
//           </p>
//           <button
//             className="w-3/4 text-xs bg-gradient-to-r from-green-500 to-green-700 text-white py-1 px-3 rounded-full hover:from-green-600 hover:to-green-800 transition-transform duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex justify-center mx-auto"
//             onClick={addToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <ImageModal />
//     </>
//   );
// }

// export default ProductCard;


import React, { useState } from "react";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, url, name, description, salePrice }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");

    if (!token) {
      // Show login required notification
      const toast = document.createElement("div");
      toast.className =
        "fixed bottom-4 right-4 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out";
      toast.textContent = "Please login to add items to cart!";
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.transform = "translateY(150%)";
        setTimeout(() => document.body.removeChild(toast), 500);
        // Redirect to login page after toast
        navigate("/login");
      }, 2000);

      return;
    }

    // If authenticated, proceed with adding to cart
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, url, name, description, salePrice, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Success toast notification
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out";
    toast.textContent = "Item added to cart!";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transform = "translateY(150%)";
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 2000);
  };

  const ImageModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShowModal(false)}
    >
      <div className="relative max-w-4xl max-h-[90vh] mx-4 bg-white rounded-xl overflow-hidden">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          <XCircle className="w-8 h-8" />
        </button>
        <img src={url} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 h-full flex flex-col">
        <div
          className="relative cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={url}
            alt={name}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {name}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-3">
            {description}
          </p>
          <div className="mt-auto">
            <p className="text-lg md:text-xl font-bold text-green-600 mb-3">
              ${salePrice.toFixed(2)} / SQ.F.
            </p>
            <button
              className="w-3/4 text-xs bg-gradient-to-r from-green-500 to-green-700 text-white py-1 px-3 rounded-full hover:from-green-600 hover:to-green-800 transition-transform duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex justify-center mx-auto"
              onClick={handleAddToCart}
            >
              {localStorage.getItem("token")
                ? "Add to Cart"
                : "Login to Purchase"}
            </button>
          </div>
        </div>
      </div>

      <ImageModal />
    </>
  );
}

export default ProductCard;