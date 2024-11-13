
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // تأكد من إضافة مفتاح Stripe الخاص بك

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(items);
//   }, []);

//   const handleRemoveItem = (id) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   };

//   const handleUpdateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return; // عدم السماح بتحديث الكمية إلى أقل من 1
//     const updatedItems = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   };

//   const handleCheckout = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/orders/create",
//         {
//           // userId: localStorage.getItem("userId"), // احصل على معرف المستخدم من التخزين المحلي
//           products: cartItems,
//           totalAmount: cartItems.reduce(
//             (total, item) => total + item.salePrice * item.quantity,
//             0
//           ),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // تأكد من وجود التوكن
//           },
//         }
//       );
//         navigate("/checkout");
//       const { sessionId } = response.data;

//       // إعادة التوجيه إلى Stripe Checkout
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({
//         sessionId,
//       });

//       if (error) {
//         console.error("Error:", error);
//       }
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.salePrice * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between border-b py-4"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <p>${item.salePrice.toFixed(2)} / SQ.F.</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() =>
//                       handleUpdateQuantity(item.id, item.quantity - 1)
//                     }
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{item.quantity}</span>
//                   <button
//                     onClick={() =>
//                       handleUpdateQuantity(item.id, item.quantity + 1)
//                     }
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => handleRemoveItem(item.id)}
//                     className="ml-4 text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-6">
//               <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//               <button
//                 onClick={handleCheckout}
//                 className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Cart;







import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutModal from "./CheckoutModal";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stripePromiseState] = useState(() =>
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders/create",
        {
          products: cartItems,
          totalAmount: cartItems.reduce(
            (total, item) => total + item.salePrice * item.quantity,
            0
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { sessionId } = response.data;
      setIsModalOpen(true);

      const stripe = await stripePromiseState;
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePaymentSuccess = () => {
    localStorage.removeItem("cartItems");
    navigate("/payment-success");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100"
                  >
                    {/* عرض الصورة */}
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />

                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-green-600 font-medium">
                        ${item.salePrice.toFixed(2)} / SQ.F.
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="px-4 py-2 font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-gray-600">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl font-medium hover:from-green-400 hover:to-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPaymentSuccess={handlePaymentSuccess}
        stripePromise={stripePromiseState}
        totalAmount={total}
      />
    </div>
  );
}

export default Cart;