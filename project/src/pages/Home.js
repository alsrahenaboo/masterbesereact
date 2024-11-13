import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardHome = ({ url, title, path }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-4"
  >
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[4/3]">
        <img src={url} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link
            to={path}
            className="text-lg font-semibold text-white hover:text-green-400 transition duration-300"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const InstallationCard = ({ imageUrl, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={imageUrl}
      alt={description}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12"
      >
        <div className="lg:w-1/2">
          <img
            src={require("../imges/heroimg.jpeg")}
            alt="Luxury flooring"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Elevate Your Space with{" "}
            <span className="text-green-600">Azazma Floors</span>
          </h1>
          <p className="text-xl text-gray-700">
            Discover a wide range of luxury flooring products that add refined
            elegance to any residential or commercial space. From hardwood and
            tile to laminate and carpet, we offer high-quality products from
            trusted brands.
          </p>
          <Button className="mt-4">
            Explore Our Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-green-600">Azazma Floors?</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Expert Guidance"
            description="Our team provides personalized advice to help you find the perfect flooring solution."
          />
          <FeatureCard
            title="Quality Products"
            description="We offer a curated selection of high-quality flooring from renowned brands."
          />
          <FeatureCard
            title="Professional Installation"
            description="Our skilled installers ensure your new floors are perfectly fitted."
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-24"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Browse Our <span className="text-green-600">Flooring Categories</span>
        </h2>
        <div className="flex flex-wrap -mx-4">
          <CardHome
            url={require("../imges/Rectangle 12.png")}
            title="Hardwood Flooring"
            path="/Hardwood"
          />
          <CardHome
            url={require("../imges/Group 33.png")}
            title="Vinyl Flooring"
            path="/Vinyl"
          />
          <CardHome
            url={require("../imges/3a.png")}
            title="Laminate Flooring"
            path="/Laminate"
          />
          <CardHome
            url={require("../imges/4a.png")}
            title="Carpet Flooring"
            path="/Carpet"
          />
          <CardHome
            url={require("../imges/5a.png")}
            title="Tiles Flooring"
            path="/Tiles"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12"
      >
        <div className="lg:w-2/3 grid grid-cols-2 gap-4">
          <img
            src={require("../imges/Rectangle 9.png")}
            alt="Flooring sample 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={require("../imges/Rectangle 10.png")}
            alt="Flooring sample 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-2xl font-bold">
            Perfect Flooring Solutions for Every Space
          </h2>
          <p className="text-gray-700">
            At Azazma Floors, we offer a wide range of flooring options to suit
            every taste and budget. From luxurious hardwood to durable vinyl and
            cozy carpets, our expert team will help you find the perfect
            flooring solution for your home or business.
          </p>
          <Button className="bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            Explore Options
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Recent <span className="text-green-600">Installations</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <InstallationCard
              key={i}
              imageUrl={require(`../imges/m${i}.png`)}
              description="Vinyl Flooring Installation in North York"
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/Installation"
            className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            View all
          </Link>
        </div>
      </motion.section>
    </div>
  );
}







// import React from 'react';
// import { Link } from 'react-router-dom';

// const CardHome = ({ url, title, path }) => (
//   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
//     <div className="relative rounded-lg overflow-hidden shadow-lg">
//       <img src={url} alt={title} className="w-full h-64 object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4">
//         <Link to={path} className="text-lg font-semibold hover:text-green-400 transition duration-300">
//           {title}
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// const Home = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="flex flex-col md:flex-row items-center justify-between mb-16">
//         <img src={require("../imges/heroimg.jpeg")} alt="hero" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0" />
//         <p className="md:w-1/2 text-lg md:text-xl lg:text-2xl text-gray-700 md:pl-8">
//           Azazma company carries a wide range of luxury flooring products that add a refined look and feel to any residential or commercial space. From hardwood and tile to laminate and carpet, we stock high-quality products from many trusted domestic and foreign flooring brands.
//         </p>
//       </section>

//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
//         Why Choose <span className="text-green-500">Azazma Floors?</span>
//       </h1>

//       <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-16">
//         <img src={require("../imges/imagehero2.jpeg")} alt="hero2" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0" />
//         <p className="md:w-1/2 text-lg md:text-xl lg:text-2xl text-gray-700 md:pr-8">
//           We have been in the flooring industry for over 2 years now and have worked with a diverse group of clientele, including homeowners, builders, contractors, and designers. Our experience has provided us with many unique challenges, and we have always managed to provide our clients with the products and services they needed to create an elegant and refined space.
//         </p>
//       </section>

//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
//         Browse Our <span className="text-green-500">Flooring Categories</span>
//       </h1>

//       <div className="flex flex-wrap -mx-4 mb-16">
//         <CardHome url={require("../imges/Rectangle 12.png")} title="Hardwood Flooring" path="/Hardwood" />
//         <CardHome url={require("../imges/Group 33.png")} title="Vinyl Flooring" path="/Vinyl" />
//         <CardHome url={require("../imges/3a.png")} title="Laminate Flooring" path="/Laminate" />
//         <CardHome url={require("../imges/4a.png")} title="Carpet Flooring" path="/Carpet" />
//         <CardHome url={require("../imges/5a.png")} title="Tiles Flooring" path="/Tiles" />
//       </div>

//       <section className="flex flex-col lg:flex-row items-center justify-between mb-16">
//         <div className="lg:w-2/3 flex flex-wrap">
//           <img src={require("../imges/Rectangle 9.png")} alt="" className="w-1/2 p-2 rounded-lg" />
//           <img src={require("../imges/Rectangle 10.png")} alt="" className="w-1/2 p-2 rounded-lg" />
//         </div>
//         <div className="lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
//           <h2 className="text-2xl font-bold mb-4">Hardwood, Engineered Hardwood, Laminate & Vinyl Flooring For Sale In Toronto</h2>
//           <p className="text-gray-700">
//             Along with great quality flooring supplies from top brands, we at Azazma Company Floors offer great flooring sales and deals. For the best selection of hardwood, laminate, vinyl and engineered hardwood flooring at the best prices, it doesn't get any better than Azazma Company Floors.
//           </p>
//         </div>
//       </section>

//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
//         Recent <span className="text-green-500">Installations</span>
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
//         {[1, 2, 3, 4, 5, 6].map((i) => (
//           <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src={require(../imges/m${i}.png)} alt={Installation ${i}} className="w-full h-64 object-cover" />
//             <p className="p-4 text-lg text-gray-700">Vinyl Flooring Installation in North York</p>
//           </div>
//         ))}
//       </div>

//       <div className="text-center">
//         <Link to="/Installation" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
//           View all
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;  