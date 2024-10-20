import React from "react";
import Sidebar from "./Sidebar";
import ProductForm from "./ProductForm";


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 pl-80">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <ProductForm />
        
        
        
      </div>
    </div>
  );
};

export default Dashboard;
