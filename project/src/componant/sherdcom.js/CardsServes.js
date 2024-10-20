// import React from "react";

// function ProductCard({ url, name, description, salePrice }) {
//   return (
//     <div className="product-card">
//       <img src={url} alt={name} className="product-image" />
//       <h2 className="product-name">{name}</h2>
//       <h3 className="product-name">{description}</h3>
//       {/* <p className="regular-price">REG: ${Price} / SQ.F.</p> */}
//       <p className="sale-price">Price: ${salePrice} / SQ.F.</p>
//       <button className="buy-button">add to cart</button>
//     </div>
//   );
// }

// export default ProductCard;
// import React from "react";

// function ProductCard({ id, url, name, description, salePrice }) {
//   const addToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingItemIndex = cartItems.findIndex((item) => item.id === id);

//     if (existingItemIndex !== -1) {
//       // عنصر موجود بالفعل، زيادة الكمية
//       cartItems[existingItemIndex].quantity += 1;
//     } else {
//       // عنصر جديد، إضافته إلى العربة مع كمية 1
//       cartItems.push({ id, url, name, description, salePrice, quantity: 1 });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     alert("تم إضافة العنصر إلى السلة!");
//   };

//   return (
//     <div className="product-card">
//       <img src={url} alt={name} className="product-image" />
//       <h2 className="product-name">{name}</h2>
//       <h3 className="product-description">{description}</h3>
//       <p className="sale-price">Price: ${salePrice} / SQ.F.</p>
//       <button className="buy-button" onClick={addToCart}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;
import React from "react";

function ProductCard({ id, url, name, description, salePrice }) {
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, url, name, description, salePrice, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={url}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-3">{description}</p>
        <p className="text-lg md:text-xl font-bold text-green-600 mb-3">
          ${salePrice} / SQ.F.
        </p>
        <button
          className="mx-auto text-xs bg-gradient-to-r from-green-500 to-green-700 text-white py-1.5 px-4 rounded-full hover:from-green-600 hover:to-green-800 transition-transform duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex justify-center"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;