// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// function CheckoutForm({ onPaymentSuccess, totalAmount }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       setError(error.message);
//       setProcessing(false);
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/payment/process",
//         {
//           payment_method_id: paymentMethod.id,
//           amount: totalAmount * 100, // Convert to cents
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (data.success) {
//         onPaymentSuccess();
//       } else {
//         setError("Payment failed. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }

//     setProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//       >
//         {processing ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// }

// export default CheckoutForm;







// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import SuccessModal from "./SuccessModal";
// import { useNavigate } from "react-router-dom";

// function CheckoutForm({ onPaymentSuccess, totalAmount }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       setError(error.message);
//       setProcessing(false);
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/payment/process",
//         {
//           payment_method_id: paymentMethod.id,
//           amount: totalAmount * 100, // Convert to cents
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (data.success) {
//         setShowSuccessModal(true);
//         onPaymentSuccess();
//       } else {
//         setError("Payment failed. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }

//     setProcessing(false);
//   };

//   const handleCloseSuccessModal = () => {
//     setShowSuccessModal(false);
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         {error && <div className="text-red-500 mt-2">{error}</div>}
//         <button
//           type="submit"
//           disabled={!stripe || processing}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//         >
//           {processing ? "Processing..." : "Pay Now"}
//         </button>
//       </form>
//       <SuccessModal
//         isOpen={showSuccessModal}
//         onClose={handleCloseSuccessModal}
//       />
//     </>
//   );
// }

// export default CheckoutForm;










import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ products, totalAmount }) {
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe) {
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/orders",
        {
          products,
          totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { sessionId } = data;

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {processing ? "Processing..." : "Proceed to Checkout"}
      </button>
    </form>
  );
}

export default CheckoutForm;