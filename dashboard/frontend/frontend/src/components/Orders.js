// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/orders");
//         console.log("Orders Response:", response.data); // تحقق من البيانات
//         setOrders(response.data);
//       } catch (error) {
//         setError("Error fetching orders");
//         console.error("Fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="flex">
//       <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
//         <Sidebar />
//       </div>
//       <div className="ml-64 p-8 w-full">
//         <h2 className="text-2xl font-bold mb-6">Orders</h2>
//         <ul className="space-y-4">
//           {orders.map((order) => (
//             <li key={order._id} className="bg-white shadow-md rounded-lg p-4">
//               <div className="flex justify-between items-center">
//                 <p className="text-lg font-semibold">
//                   User: {order.user ? order.user.username : "Unknown User"}
//                 </p>
//                 <p className="text-green-600 font-bold">
//                   Total Amount: ${order.totalAmount.toFixed(2)}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
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

    fetchOrders();
  }, []);

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/orders/${id}`,
        updatedData
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order._id === id ? response.data : order))
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
        <Sidebar />
      </div>
      <div className="ml-64 p-8 w-full">
        <h2 className="text-2xl font-bold mb-6">Orders</h2>
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">
                  User: {order.user ? order.user.username : "Unknown User"}
                </p>
                <p className="text-green-600 font-bold">
                  Total Amount: $
                  {order.totalAmount ? order.totalAmount.toFixed(2) : "0.00"}
                </p>
              </div>
              <div>
                <p>Status: {order.status || "Status not available"}</p>
                <p>
                  Shipping Address:{" "}
                  {order.shippingDetails?.address || "Address not available"}
                </p>
                <button
                  onClick={() => handleUpdate(order._id, { status: "Shipped" })}
                  className="bg-blue-500 text-white py-1 px-2 rounded"
                >
                  Mark as Shipped
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded ml-2"
                >
                  Delete Order
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
