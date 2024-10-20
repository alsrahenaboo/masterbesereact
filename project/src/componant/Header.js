import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import shopping cart icon
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={require("../imges/logo.jpeg")} alt="Logo" className="logo" />
        <Link to="#" className="phone-number">
          <span className="phone-number">
            <MdOutlineLocalPhone /> (437) 265-0978
          </span>
        </Link>
        <div className="nav-buttons">
          <nav className="auth-nav">
            <Link to="/signup" className="nav-button">
              Sign Up
            </Link>
            <Link to="/login" className="nav-button">
              Login
            </Link>
          </nav>
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/Reviews" className="nav-button">
            Reviews
          </Link>
          <Link to="/Contact" className="nav-button">
            Contact
          </Link>
          <Link to="/Cart" className="nav-button">
            {" "}
            {/* Link to cart page */}
            <AiOutlineShoppingCart /> {/* Shopping cart icon */}
          </Link>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/Hardwood">Hardwood</Link>
          </li>
          <li>
            <Link to="/Vinyl">Vinyl</Link>
          </li>
          <li>
            <Link to="/Laminate">Laminate</Link>
          </li>
          <li>
            <Link to="/Carpet">Carpet</Link>
          </li>
          <li>
            <Link to="/Tiles">Tiles</Link>
          </li>
          <li>
            <Link to="#">Our services</Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Installation, removal and repair</Link>
              </li>
              <li>
                <Link to="#">Transport of goods</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
// import React, { useState, useEffect } from "react";
// import { MdOutlineLocalPhone, MdClose, MdMenu, MdSearch } from "react-icons/md";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// function Header() {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(items);
//   }, [isCartOpen]);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//     setIsMobileMenuOpen(false);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setIsCartOpen(false);
//   };

//   const removeFromCart = (id) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     const updatedItems = cartItems
//       .map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//       .filter((item) => item.quantity > 0);
//     setCartItems(updatedItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   };

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalAmount = cartItems
//     .reduce((sum, item) => sum + item.salePrice * item.quantity, 0)
//     .toFixed(2);

//   const handleCheckout = () => {
//     setIsCheckoutOpen(true);
//     setIsCartOpen(false);
//   };
// const initialOptions = {
//   "client-id": "YOUR_CLIENT_ID", // استبدل هذا بمعرف العميل الخاص بك
//   currency: "USD",
//   intent: "capture",
// };
// const handleBuyNow = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:5000/api/paypal/create-order",
//       {
   
//          cartItems, 
//          totalAmount, 
//       }
//     );
//     console.log("Order created:", response.data);
//     // Optionally, redirect the user to a confirmation page or show a success message
//   } catch (error) {
//     console.error("Error creating order:", error);
//     // Optionally, show an error message to the user
//   }
// };
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           <img
//             src="/path-to-your-logo.png"
//             alt="Logo"
//             className="h-12 w-auto"
//           />

//           <a
//             href="tel:4372650978"
//             className="hidden md:flex items-center text-gray-600 hover:text-green-600 transition-colors"
//           >
//             <MdOutlineLocalPhone className="mr-2" />
//             (437) 265-0978
//           </a>

//           <div className="flex items-center space-x-4">
//             <div className="hidden md:block space-x-2">
//               <a
//                 href="/signup"
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//               >
//                 Sign Up
//               </a>
//               <a
//                 href="/login"
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//               >
//                 Login
//               </a>
//               <button
//                 onClick={toggleCart}
//                 className="relative bg-green-600 text-white   w-12 hover:bg-green-700 transition-colors "
//               >
//                 <AiOutlineShoppingCart className="text-4xl" />
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-6 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>
//             </div>

//             <div className="relative hidden md:block">
//               <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             <button
//               onClick={toggleMobileMenu}
//               className="md:hidden text-gray-600 hover:text-green-600 transition-colors"
//             >
//               <MdMenu className="text-2xl" />
//             </button>
//           </div>
//         </div>

//         <nav
//           className={`${isMobileMenuOpen ? "block" : "hidden"} md:block py-4`}
//         >
//           <ul className="flex flex-col md:flex-row md:justify-center md:space-x-6">
//             {["Home", "Hardwood", "Vinyl", "Laminate", "Carpet", "Tiles"].map(
//               (item) => (
//                 <li key={item} className="py-2 md:py-0">
//                   <a
//                     href={`/${item.toLowerCase()}`}
//                     className="text-gray-600 hover:text-green-600 transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               )
//             )}
//             <li className="relative group py-2 md:py-0">
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-green-600 transition-colors"
//               >
//                 Our Services
//               </a>
//               <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-green-100"
//                   >
//                     Installation, removal and repair
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-green-100"
//                   >
//                     Transport of goods
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {isCartOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//           <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-semibold">Your Cart</h2>
//               <button
//                 onClick={toggleCart}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <MdClose className="text-2xl" />
//               </button>
//             </div>

//             <div className="flex-grow overflow-y-auto">
//               {cartItems.length === 0 ? (
//                 <p className="p-4 text-center text-gray-500">
//                   Your cart is empty
//                 </p>
//               ) : (
//                 <div className="p-4 space-y-4">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
//                     >
//                       <img
//                         src={item.url}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                       <div className="flex-grow">
//                         <h3 className="font-semibold text-gray-800">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-gray-600">
//                           ${item.salePrice} / SQ.F.
//                         </p>
//                         <div className="flex items-center mt-2">
//                           <button
//                             onClick={() =>
//                               updateQuantity(
//                                 item.id,
//                                 Math.max(1, item.quantity - 1)
//                               )
//                             }
//                             className="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
//                           >
//                             -
//                           </button>
//                           <span className="mx-2 text-gray-700">
//                             {item.quantity}
//                           </span>
//                           <button
//                             onClick={() =>
//                               updateQuantity(item.id, item.quantity + 1)
//                             }
//                             className="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <MdClose />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="p-4 border-t bg-gray-50">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="font-semibold text-gray-700">Total:</span>
//                 <span className="font-bold text-green-600 text-xl">
//                   ${totalAmount}
//                 </span>
//               </div>
//               <button
//                 onClick={handleCheckout}
//                 className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isCheckoutOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Checkout</h2>
//               <button
//                 onClick={() => setIsCheckoutOpen(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <MdClose className="text-2xl" />
//               </button>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                 Order Summary
//               </h3>
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center mb-2"
//                 >
//                   <span className="text-gray-600">
//                     {item.name} (x{item.quantity})
//                   </span>
//                   <span className="font-semibold">
//                     ${(item.salePrice * item.quantity).toFixed(2)}
//                   </span>
//                 </div>
//               ))}
//               <div className="border-t border-gray-200 mt-4 pt-4">
//                 <div className="flex justify-between items-center font-semibold">
//                   <span className="text-gray-800">Total:</span>
//                   <span className="text-green-600 text-xl">${totalAmount}</span>
//                 </div>
//               </div>
//             </div>

//             <PayPalScriptProvider options={initialOptions}>
//               <div className="checkout-container">
//                 <h2>Checkout</h2>
//                 {/* <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [
//                         {
//                           amount: {
//                             value: "100.00", // استبدل بالمبلغ المناسب
//                           },
//                         },
//                       ],
//                     });
//                   }}
//                   onApprove={async (data, actions) => {
//                     const order = await actions.order.capture();
//                     console.log("Order captured:", order);
//                     // قم بتحويل المستخدم إلى صفحة تأكيد الدفع
//                   }}
//                   onError={(err) => {
//                     console.error("Error during PayPal Checkout:", err);
//                   }}
//                 /> */}
//                 <button
//                   onClick={handleBuyNow}
//                   className=" bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </PayPalScriptProvider>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
// export default Header;
