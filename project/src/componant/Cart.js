
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
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p>${item.salePrice.toFixed(2)} / SQ.F.</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
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