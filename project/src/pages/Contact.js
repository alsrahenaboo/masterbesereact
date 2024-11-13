

                  
 

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Baye from "../componant/sherdcom.js/sectionpay";

// function Contact() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     requirement: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setErrorMessage("Please log in to send a message.");
//       navigate("/login"); // توجيه المستخدم إلى صفحة الـ login
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setSuccessMessage("Your message has been sent successfully!");
//       setErrorMessage("");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         requirement: "",
//       });
//     } catch (error) {
//       setErrorMessage("Failed to send your message. Please try again later.");
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <>
//       <Baye url={require("../imges/laminat.png")} titl={"Contact Us"} />
//       <div className="container mx-auto px-4 py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <nav className="text-sm mb-6">
//             <Link
//               to="/"
//               className="text-green-600 hover:text-green-800 transition duration-300"
//             >
//               Home
//             </Link>
//             <span className="mx-2 text-gray-500">&gt;</span>
//             <span className="text-gray-600">Contact</span>
//           </nav>

//           <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
//             Contact Our Flooring Experts
//           </h1>

//           <div className="flex flex-col lg:flex-row justify-between gap-12">
//             <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold text-gray-700 mb-6">
//                 We're Here to Help
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Our customer service representatives are on-hand to assist you
//                 with any query. Whether you need information about our flooring
//                 products or services, we're here to help.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 All of our showrooms are staffed with knowledgeable customer
//                 service teams. Take advantage of their expertise by contacting
//                 us today for all your flooring inquiries.
//               </p>
//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">
//                   Contact Information
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   <span className="font-medium">Phone:</span> (123) 456-7890
//                 </p>
//                 <p className="text-gray-600 mb-2">
//                   <span className="font-medium">Email:</span>{" "}
//                   info@flooringexperts.com
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Address:</span> 123 Flooring St,
//                   City, State 12345
//                 </p>
//               </div>
//             </div>

//             <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold text-gray-700 mb-6">
//                 Get In Touch
//               </h2>
//               {successMessage && (
//                 <div
//                   className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
//                   role="alert"
//                 >
//                   <p className="font-bold">Success!</p>
//                   <p>{successMessage}</p>
//                 </div>
//               )}
//               {errorMessage && (
//                 <div
//                   className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
//                   role="alert"
//                 >
//                   <p className="font-bold">Error</p>
//                   <p>{errorMessage}</p>
//                 </div>
//               )}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="flex gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="E-mail"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <textarea
//                   name="requirement"
//                   placeholder="Tell us about your flooring requirements"
//                   required
//                   value={formData.requirement}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Baye from "../componant/sherdcom.js/sectionpay";

// مكون رسالة النجاح
const SuccessMessage = ({ message, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-start pt-4 z-50">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg animate-slideDown">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="font-bold">Success!</p>
        </div>
        <p className="mt-2">{message}</p>
      </div>
    </div>
  );
};

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage("Please log in to send a message.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSuccessMessage("Your message has been sent successfully!");
      setShowSuccess(true);
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        requirement: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send your message. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Baye url={require("../imges/laminat.png")} titl={"Contact Us"} />
      {showSuccess && (
        <SuccessMessage
          message={successMessage}
          onClose={() => setShowSuccess(false)}
        />
      )}
      <div className="container mx-auto px-4 py-12 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm mb-6">
            <Link
              to="/"
              className="text-green-600 hover:text-green-800 transition duration-300"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-500">&gt;</span>
            <span className="text-gray-600">Contact</span>
          </nav>

          <h1 className="text-4xl font-extrabold text-green-800 mb-8 text-center">
            Contact Our Flooring Experts
          </h1>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
              <h2 className="text-2xl font-bold text-green-700 mb-6">
                We're Here to Help
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our customer service representatives are on-hand to assist you
                with any query. Whether you need information about our flooring
                products or services, we're here to help.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All of our showrooms are staffed with knowledgeable customer
                service teams. Take advantage of their expertise by contacting
                us today for all your flooring inquiries.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Phone:</span> (123) 456-7890
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span>{" "}
                  info@flooringexperts.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Address:</span> 123 Flooring St,
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
              <h2 className="text-2xl font-bold text-green-700 mb-6">
                Get In Touch
              </h2>
              {errorMessage && (
                <div
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
                  role="alert"
                >
                  <p className="font-bold">Error</p>
                  <p>{errorMessage}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-1/2 p-3 text-gray-700 bg-green-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-1/2 p-3 text-gray-700 bg-green-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 text-gray-700 bg-green-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 text-gray-700 bg-green-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <textarea
                  name="requirement"
                  placeholder="Tell us about your flooring requirements"
                  required
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 text-gray-700 bg-green-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="w-full text-sm bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-full hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex justify-center items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;