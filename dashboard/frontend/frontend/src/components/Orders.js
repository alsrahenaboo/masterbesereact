




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import { FaSync, FaShippingFast, FaTrash } from 'react-icons/fa';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [filter, setFilter] = useState("");

//   const fetchOrders = async () => {
//     setLoading(false);
//     try {
//       const response = await axios.get("http://localhost:4000/api/orders");
//       setOrders(response.data);
//     } catch (error) {
//       setError("Error fetching orders");
//       console.error("Fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleUpdate = async (id) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:4000/api/orders/${id}`,
//         { status: "Shipped" }
//       );
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === id ? { ...order, status: response.data.status } : order
//         )
//       );
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/orders/${id}`);
//       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
//     } catch (error) {
//       console.error("Error deleting order:", error);
//     }
//   };

//   const filteredOrders = orders.filter((order) =>
//     order.user?.username.toLowerCase().includes(filter.toLowerCase())
//   );

//   const indexOfLastOrder = currentPage * itemsPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
//   const currentOrders = filteredOrders.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );
//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="text-red-500 text-center text-xl mt-10">{error}</div>
//     );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
//         <Sidebar />
//       </div>
//       <div className="flex-1 ml-64 p-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">
//           Orders Management
//         </h2>

//         <div className="mb-6 flex items-center">
//           <input
//             type="text"
//             placeholder="Filter by username..."
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={fetchOrders}
//             className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition duration-300"
//             title="Reload Orders"
//           >
//             <FaSync />
//           </button>
//         </div>

//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   User
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Total Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentOrders.map((order) => (
//                 <tr key={order._id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {order.user ? order.user.username : "Unknown User"}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-green-600 font-bold">
//                       $
//                       {order.totalAmount
//                         ? order.totalAmount.toFixed(2)
//                         : "0.00"}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         order.status === "Shipped"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-yellow-100 text-yellow-800"
//                       }`}
//                     >
//                       {order.status || "Status not available"}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {new Date(order.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     {order.status !== "Shipped" ? (
//                       <button
//                         onClick={() => handleUpdate(order._id)}
//                         className="text-blue-600 hover:text-blue-900 mr-3"
//                         title="Mark as Shipped"
//                       >
//                         <FaShippingFast size={20} />
//                       </button>
//                     ) : (
//                       <button
//                         className="text-gray-400 mr-3 cursor-not-allowed"
//                         disabled
//                         title="Already Shipped"
//                       >
//                         <FaShippingFast size={20} />
//                       </button>
//                     )}
//                     <button
//                       onClick={() => handleDelete(order._id)}
//                       className="text-red-600 hover:text-red-900"
//                       title="Delete Order"
//                     >
//                       <FaTrash size={20} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination controls */}
//         <div className="flex justify-center mt-4">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => setCurrentPage(index + 1)}
//               className={`mx-1 px-4 py-2 text-sm font-medium rounded-md ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;






import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FaSync, FaShippingFast, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const fetchOrders = async () => {
    setLoading(false);
    try {
      const response = await axios.get("http://localhost:4000/api/orders");
      setOrders(response.data);
    } catch (error) {
      setError("Error fetching orders");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/orders/${id}`,
        { status: "Shipped" }
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: response.data.status } : order
        )
      );
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/orders/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.user?.username.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredOrders.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center text-xl mt-10">{error}</div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Orders Management
        </h2>

        <div className="mb-6 flex items-center">
          <input
            type="text"
            placeholder="Filter by username..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchOrders}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition duration-300"
            title="Reload Orders"
          >
            <FaSync />
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {order.user ? order.user.username : "Unknown User"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-green-600 font-bold">
                      $
                      {order.totalAmount
                        ? order.totalAmount.toFixed(2)
                        : "0.00"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "Shipped"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status || "Status not available"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.status !== "Shipped" ? (
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                        title="Mark as Shipped"
                      >
                        <FaShippingFast size={20} />
                      </button>
                    ) : (
                      <button
                        className="text-gray-400 mr-3 cursor-not-allowed"
                        disabled
                        title="Already Shipped"
                      >
                        <FaShippingFast size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete Order"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handlePrevBtn}
            disabled={currentPage === pageNumbers[0]}
            className={`mx-1 px-2 py-1 rounded-md ${
              currentPage === pageNumbers[0]
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaChevronLeft />
          </button>
          {pageNumbers.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`mx-1 px-3 py-1 text-sm font-medium rounded-md ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              );
            } else {
              return null;
            }
          })}
          <button
            onClick={handleNextBtn}
            disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
            className={`mx-1 px-2 py-1 rounded-md ${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;