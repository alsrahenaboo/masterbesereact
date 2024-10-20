import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import UserList from "./components/UserList";
import Orders from "./components/Orders";
import ContactComponent from "./components/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
