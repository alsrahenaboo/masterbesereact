

// import './csspage/Header.css';
// import './csspage/Home.css';
// import './App.css';
// import './csspage/Footer.css';
// import './csspage/Hardwood.css';
// import './csspage/Contact.css';

// import Header from './componant/Header';
// import Home from './pages/Home';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Hardwood from './pages/Hardwood';
// import Vinyl from './pages/Vinyl';
// import Laminate from './pages/Laminate';
// import Footer from './componant/Footer';
// import Carpet from './pages/Carpet';
// import Tiles from './pages/Tiles';
// import Contact from './pages/Contact';
// import Reviews from "./pages/Reviews"
// import Installation from './pages/installation';
// import Signup from './pages/Signup';
// import Login from './pages/Login';





// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/Carpet" element={<Carpet />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/Hardwood" element={<Hardwood />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/Laminate" element={<Laminate />} />
//           <Route path="/Tiles" element={<Tiles />} />
//           <Route path="/Vinyl" element={<Vinyl />} />
//           <Route path="/Reviews" element={<Reviews />} />
//           <Route path="/Installation" element={<Installation />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./componant/Header";
import Footer from "./componant/Footer";
import Home from "./pages/Home";
import Hardwood from "./pages/Hardwood";
import Vinyl from "./pages/Vinyl";
import Laminate from "./pages/Laminate";
import Carpet from "./pages/Carpet";
import Tiles from "./pages/Tiles";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Installation from "./pages/installation";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthLayout from "./componant/AuthLayout";

import "./csspage/Header.css";
import "./csspage/Home.css";
import "./App.css";
import "./csspage/Footer.css";
import "./csspage/Hardwood.css";
import "./csspage/Contact.css";
// import "./csspage/Login.css";


  const MainLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without Header and Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Main routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Carpet" element={<Carpet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Hardwood" element={<Hardwood />} />
          <Route path="/Laminate" element={<Laminate />} />
          <Route path="/Tiles" element={<Tiles />} />
          <Route path="/Vinyl" element={<Vinyl />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Installation" element={<Installation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;