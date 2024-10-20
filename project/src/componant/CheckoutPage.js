import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("checkoutItems")) || [];
    setCheckoutItems(items);
  }, []);

  const handlePayment = () => {
    // Implement your payment logic here
    console.log("Processing payment...");
    // After successful payment, you might want to clear the cart and redirect
    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutItems");
    navigate("/payment-success");
  };

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>
      {checkoutItems.map((item) => (
        <div key={item.id} className="mb-4">
          <p>{item.name} - Quantity: {item.quantity}</p>
          <p>Price: ${(item.salePrice * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={handlePayment}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Process Payment
        </button>
      </div>
    </div>
  );
}

export default Checkout;