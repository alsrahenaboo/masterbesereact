

// import React, { useState, useEffect } from "react";
// import { MdOutlineLocalPhone } from "react-icons/md";
// // import { AiOutlineShoppingCart } from "react-icons/ai"; // Import shopping cart icon
// import { Link, useNavigate } from "react-router-dom";
// import { MdPerson } from "react-icons/md";
// import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";

// function Header() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     setIsAuthenticated(false);
//     navigate("/login");
//   };
//   return (
//     <header className="bg-white shadow sticky top-0 z-10">
//       <div className="flex items-center justify-between px-5 py-3 bg-white text-primary">
//         <div className="flex items-center space-x-4">
//           <img
//             src={require("../imges/logo.jpeg")}
//             alt="Logo"
//             className="h-12 w-20 rounded-full"
//           />
//           <Link
//             to="#"
//             className="flex items-center text-base no-underline text-gray-800"
//           >
//             <MdOutlineLocalPhone className="mr-1" /> (437) 265-0978
//           </Link>
//         </div>

//         <div className="flex items-center space-x-3">
//           <nav className="space-x-3 flex items-center">
//             <Link
//               to="/"
//               className="bg-green-700 text-white px-4 py-2 rounded-md"
//             >
//               Home
//             </Link>
//             <Link
//               to="/Reviews"
//               className="bg-green-700 text-white px-4 py-2 rounded-md"
//             >
//               Reviews
//             </Link>
//             <Link
//               to="/Contact"
//               className="bg-green-700 text-white px-4 py-2 rounded-md"
//             >
//               Contact
//             </Link>

//             {isAuthenticated ? (
//               <>
//                 <div className="relative">
//                   <button
//                     onClick={() => setShowProfileMenu(!showProfileMenu)}
//                     className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
//                   >
//                     <MdPerson className="w-5 h-5" />
//                   </button>

//                   {showProfileMenu && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                       <Link
//                         to="/profile"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         My Profile
//                       </Link>
//                       <Link
//                         to="/orders"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         My Orders
//                       </Link>
                      
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   to="/Cart"
//                   className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
//                 >
//                   <AiOutlineShoppingCart className="w-5 h-5" />
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center space-x-1"
//                 >
//                   <AiOutlineLogout />
//                   <span>Logout</span>
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
//               >
//                 Login
//               </Link>
//             )}
//           </nav>
//         </div>
//       </div>

//       <nav className="bg-gray-700 py-4">
//         <ul className="flex justify-center space-x-4">
//           <li>
//             <Link to="/Hardwood" className="text-white px-3 py-2 no-underline">
//               Hardwood
//             </Link>
//           </li>
//           <li>
//             <Link to="/Vinyl" className="text-white px-3 py-2 no-underline">
//               Vinyl
//             </Link>
//           </li>
//           <li>
//             <Link to="/Laminate" className="text-white px-3 py-2 no-underline">
//               Laminate
//             </Link>
//           </li>
//           <li>
//             <Link to="/Carpet" className="text-white px-3 py-2 no-underline">
//               Carpet
//             </Link>
//           </li>
//           <li>
//             <Link to="/Tiles" className="text-white px-3 py-2 no-underline">
//               Tiles
//             </Link>
//           </li>
//           <li className="relative group">
//             <Link
//               to="/Installation"
//               className="text-white px-3 py-2 no-underline"
//             >
//               Our Services
//             </Link>
//             <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-700 text-white mt-2 w-48 shadow-lg space-y-2 p-3">
//               <li>
//                 <Link
//                   to="/Installation"
//                   className="no-underline block px-2 py-1"
//                 >
//                   Installation, Removal, and Repair
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Installation"
//                   className="no-underline block px-2 py-1"
//                 >
//                   Transport of Goods
//                 </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;




import React, { useState, useEffect } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdPerson, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="flex items-center justify-between px-5 py-3 bg-white text-primary">
        <div className="flex items-center space-x-4">
          <img
            src={require("../imges/logo.jpeg")}
            alt="Logo"
            className="h-12 w-20 rounded-full"
          />
          <Link
            to="#"
            className="hidden md:flex items-center text-base no-underline text-gray-800"
          >
            <MdOutlineLocalPhone className="mr-1" /> (437) 265-0978
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          <nav className="space-x-3 flex items-center">
            <Link
              to="/"
              className="bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/Reviews"
              className="bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Reviews
            </Link>
            <Link
              to="/Contact"
              className="bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
                  >
                    <MdPerson className="w-5 h-5" />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/Cart"
                  className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
                >
                  <AiOutlineShoppingCart className="w-5 h-5" />
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center space-x-1"
                >
                  <AiOutlineLogout />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
              >
                Login
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMobileMenu}>
              <MdClose className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-2">
            <Link to="#" className="flex items-center text-gray-800 mb-4">
              <MdOutlineLocalPhone className="mr-1" /> (437) 265-0978
            </Link>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-center"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/Reviews"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-center"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
              <Link
                to="/Contact"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-center"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Product Categories */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <h3 className="text-gray-600 mb-2 font-medium">Products</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/Hardwood"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Hardwood
                  </Link>
                  <Link
                    to="/Vinyl"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Vinyl
                  </Link>
                  <Link
                    to="/Laminate"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Laminate
                  </Link>
                  <Link
                    to="/Carpet"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Carpet
                  </Link>
                  <Link
                    to="/Tiles"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Tiles
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <h3 className="text-gray-600 mb-2 font-medium">Our Services</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/Installation"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Installation, Removal, and Repair
                  </Link>
                  <Link
                    to="/Installation"
                    className="text-gray-700 hover:text-green-700"
                    onClick={closeMobileMenu}
                  >
                    Transport of Goods
                  </Link>
                </div>
              </div>

              {/* Auth Section */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="block py-2 text-gray-700 hover:text-green-700"
                      onClick={closeMobileMenu}
                    >
                      <div className="flex items-center">
                        <MdPerson className="mr-2" />
                        My Profile
                      </div>
                    </Link>
                    <Link
                      to="/orders"
                      className="block py-2 text-gray-700 hover:text-green-700"
                      onClick={closeMobileMenu}
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/Cart"
                      className="block py-2 text-gray-700 hover:text-green-700"
                      onClick={closeMobileMenu}
                    >
                      <div className="flex items-center">
                        <AiOutlineShoppingCart className="mr-2" />
                        Cart
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMobileMenu();
                      }}
                      className="flex items-center text-red-600 py-2 w-full"
                    >
                      <AiOutlineLogout className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-green-700 text-white px-4 py-2 rounded-md text-center block"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Categories Nav */}
      <nav className="hidden md:block bg-gray-700 py-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/Hardwood" className="text-white px-3 py-2 no-underline">
              Hardwood
            </Link>
          </li>
          <li>
            <Link to="/Vinyl" className="text-white px-3 py-2 no-underline">
              Vinyl
            </Link>
          </li>
          <li>
            <Link to="/Laminate" className="text-white px-3 py-2 no-underline">
              Laminate
            </Link>
          </li>
          <li>
            <Link to="/Carpet" className="text-white px-3 py-2 no-underline">
              Carpet
            </Link>
          </li>
          <li>
            <Link to="/Tiles" className="text-white px-3 py-2 no-underline">
              Tiles
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/Installation"
              className="text-white px-3 py-2 no-underline"
            >
              Our Services
            </Link>
            <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-700 text-white mt-2 w-48 shadow-lg space-y-2 p-3">
              <li>
                <Link
                  to="/Installation"
                  className="no-underline block px-2 py-1"
                >
                  Installation, Removal, and Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/Installation"
                  className="no-underline block px-2 py-1"
                >
                  Transport of Goods
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;