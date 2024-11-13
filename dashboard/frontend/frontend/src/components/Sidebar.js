// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-white h-screen fixed w-64 p-4">
//       <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
//       <ul>
//         <li>
//           <Link to="/dashboard" className="block py-2 hover:bg-gray-700">
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/products" className="block py-2 hover:bg-gray-700">
//             Products
//           </Link>
//         </li>
//         <li>
//           <Link to="/users" className="block py-2 hover:bg-gray-700">
//             users
//           </Link>
//         </li>
//         <li>
//           <Link to="/orders" className="block py-2 hover:bg-gray-700">
//             orders
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block py-2 hover:bg-gray-700">
//             contact 
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/"
//             onClick={() => localStorage.removeItem("token")}
//             className="block py-2 hover:bg-gray-700"
//           >
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", icon: FaChartBar, label: "Dashboard" },
    { path: "/products", icon: FaBox, label: "Products" },
    { path: "/users", icon: FaUsers, label: "Users" },
    { path: "/orders", icon: FaShoppingCart, label: "Orders" },
    { path: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 h-screen fixed w-64 flex flex-col">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-white mb-6">Admin Dashboard</h2>
      </div>
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center py-3 px-5 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <item.icon className="mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5">
        <Link
          to="/"
          onClick={() => localStorage.removeItem("token")}
          className="flex items-center py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;