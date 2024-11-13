import footimg from "../imges/footimg.png";

// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="relative">
//       <div
//         className="h-[70vh] w-full bg-no-repeat bg-cover bg-center rounded-b-[3%] text-white"
//         style={{
//           backgroundImage: `url(${footimg})`,
//           backgroundColor: "rgba(0,0,0,0.7)", // إضافة طبقة معتمة
//           backgroundBlend: "overlay",
//         }}
//       >
//         <div className="flex justify-between items-start p-10">
//           {/* About Us Section */}
//           <div className="flex-1 mx-2">
//             <h5 className="text-3xl mb-2">ABOUT US</h5>
//             <p className="text-2xl">
//               Al-Azzama Company is committed to providing installation, removal,
//               and home repair services, in addition to shipping high-quality
//               hardwood flooring, tile, carpet, and vinyl products, at the best
//               possible prices in Canada.
//             </p>
//           </div>

//           {/* Links Section */}
//           <div className="flex-1 mx-2">
//             <h5 className="text-3xl mb-2">Links</h5>
//             <ul className="list-none">
//               <li className="text-xl">
//                 <Link
//                   to="/hardwood"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Hardwood
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/vinyl"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Vinyl
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/laminate"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Laminate
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/carpet"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Carpet
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/tiles"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Tiles
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/installations"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Installations project
//                 </Link>
//               </li>
//               <li className="text-xl">
//                 <Link
//                   to="/contact"
//                   className="text-white hover:underline hover:decoration-[#0de92a]"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div className="flex-1 mx-2">
//             <h5 className="text-3xl mb-2">TORONTO</h5>
//             <p className="text-xl">TELEPHONE: (437) 265-9978</p>
//             <button className="text-white bg-[#306b24] text-3xl w-[300px] rounded-[25%] mt-10 ml-[35%] hover:bg-[#0de92a]">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-xl h-[90px] flex justify-center items-center bg-[rgb(91,94,94)] text-white text-center">
//         Copyright 2024 © Azazma Flooring | Terms and Conditions | Privacy Policy
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative">
      <div
        className="min-h-[500px] w-full bg-no-repeat bg-cover bg-center rounded-b-[3%] text-white relative"
        style={{
          backgroundImage: `url(${footimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-b-[3%]"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {/* About Us Section */}
            <div className="space-y-4">
              <h5 className="text-2xl font-semibold mb-4">ABOUT US</h5>
              <p className="text-base lg:text-lg leading-relaxed">
                Al-Azzama Company is committed to providing installation,
                removal, and home repair services, in addition to shipping
                high-quality hardwood flooring, tile, carpet, and vinyl
                products, at the best possible prices in Canada.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex justify-center items-center">
              <div className="space-y-2">
                <h5 className="text-2xl font-semibold mb-4 text-center">
                  Links
                </h5>
                <ul className="space-y-5">
                  {[
                    ["Hardwood", "/hardwood"],
                    ["Vinyl", "/vinyl"],
                    ["Laminate", "/laminate"],
                    ["Carpet", "/carpet"],
                    ["Tiles", "/tiles"],
                    ["Installations project", "/installations"],
                  ].map(([title, path]) => (
                    <li key={path} className="text-center">
                      <Link
                        to={path}
                        className="text-base lg:text-lg hover:text-green-400 transition-colors duration-300"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-4">
              <h5 className="text-2xl font-semibold mb-4">TORONTO</h5>
              <p className="text-base lg:text-lg mb-6">
                TELEPHONE: (437) 265-9978
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-green-800 hover:bg-green-600 rounded-full text-lg font-medium transition-colors duration-300 text-center w-full md:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm md:text-base mb-2">
            Copyright 2024 © Azazma Flooring |{" "}
            <Link to="/terms" className="hover:text-green-400">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="hover:text-green-400">
              Privacy Policy
            </Link>
          </div>
          <div className="text-xs md:text-sm text-gray-400 hover:text-green-400 transition-colors duration-300">
            Developed with ❤️ by Abdullah Awwad Salem Alsaraheen
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;