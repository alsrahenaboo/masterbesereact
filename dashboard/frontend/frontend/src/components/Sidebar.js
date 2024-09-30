import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="block py-2 hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products" className="block py-2 hover:bg-gray-700">
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => localStorage.removeItem("token")}
            className="block py-2 hover:bg-gray-700"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
