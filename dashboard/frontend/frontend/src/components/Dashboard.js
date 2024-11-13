// // import React from "react";
// // import Sidebar from "./Sidebar";



// // const Dashboard = () => {
// //   return (
// //     <div className="flex">
// //       <Sidebar />
// //       <div className="flex-grow p-6 pl-80">
// //         <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
       
        
        
        
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Loader2 } from "lucide-react";

// const Dashboard = () => {
//   const [orderStats, setOrderStats] = useState([]);
//   const [productStats, setProductStats] = useState([]);
//   const [loading, setLoading] = useState(true);

//    useEffect(() => {
//      const fetchDashboardData = async () => {
//        try {
//          const [orderRes, productRes] = await Promise.all([
//            axios.get("http://localhost:4000/api/stats/orders"),
//            axios.get("http://localhost:4000/api/stats/products"),
//          ]);

//          console.log("Order Data:", orderRes.data); // Log order data
//          console.log("Product Data:", productRes.data); // Log product data

//          setOrderStats(orderRes.data);
//          setProductStats(productRes.data);
//          setLoading(false);
//        } catch (error) {
//          console.error("Error fetching dashboard data:", error);
//          setLoading(false);
//        }
//      };

//      fetchDashboardData();
//    }, []);
//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-grow p-6 pl-80">
//         <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Orders Chart */}
//           <div className="card">
//             <div className="card-header">
//               <h2 className="card-title">Monthly Orders</h2>
//             </div>
//             <div className="card-content">
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={orderStats}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="orders"
//                     stroke="#8884d8"
//                     name="Orders"
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="revenue"
//                     stroke="#82ca9d"
//                     name="Revenue ($)"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Products Chart */}
//           <div className="card">
//             <div className="card-header">
//               <h2 className="card-title">Top Products</h2>
//             </div>
//             <div className="card-content">
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={productStats}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="sales" fill="#8884d8" name="Sales" />
//                   <Bar dataKey="stock" fill="#82ca9d" name="Stock" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const [orderStats, setOrderStats] = useState([]);
  const [productStats, setProductStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [orderRes, productRes] = await Promise.all([
          axios.get("http://localhost:4000/api/stats/orders"),
          axios.get("http://localhost:4000/api/stats/products"),
        ]);

        console.log("Order Data:", orderRes.data); // Log order data
        console.log("Product Data:", productRes.data); // Log product data

        setOrderStats(orderRes.data);
        setProductStats(productRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 pl-80">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Orders Chart */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daily Orders</h2>
            </div>
            <div className="card-content">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={orderStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#8884d8"
                    name="Orders"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#82ca9d"
                    name="Revenue ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Products Chart */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Top Products</h2>
            </div>
            <div className="card-content">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={productStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" name="Sales" />
                  <Bar dataKey="stock" fill="#82ca9d" name="Stock" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
