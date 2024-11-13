import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
   localStorage.removeItem("cartItems");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Order Successful!
        </h1>
        <p className="text-lg mb-4">Thank you for your purchase.</p>
        <p className="text-md text-gray-600">
          You will be redirected to the home page in 5 seconds...
        </p>
      </div>
    </div>
  );
}

export default OrderSuccess;
