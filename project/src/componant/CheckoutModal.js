import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function CheckoutModal({
  isOpen,
  onClose,
  onPaymentSuccess,
  stripePromise,
  totalAmount,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Complete Your Purchase</h2>
        <p className="mb-4">Total: ${totalAmount.toFixed(2)}</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            onPaymentSuccess={onPaymentSuccess}
            totalAmount={totalAmount}
          />
        </Elements>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;
