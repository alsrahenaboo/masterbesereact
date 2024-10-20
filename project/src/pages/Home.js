import React from 'react';
import { Link } from 'react-router-dom';

const CardHome = ({ url, title, path }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <img src={url} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4">
        <Link to={path} className="text-lg font-semibold hover:text-green-400 transition duration-300">
          {title}
        </Link>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <img src={require("../imges/heroimg.jpeg")} alt="hero" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0" />
        <p className="md:w-1/2 text-lg md:text-xl lg:text-2xl text-gray-700 md:pl-8">
          Azazma company carries a wide range of luxury flooring products that add a refined look and feel to any residential or commercial space. From hardwood and tile to laminate and carpet, we stock high-quality products from many trusted domestic and foreign flooring brands.
        </p>
      </section>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Why Choose <span className="text-green-500">Azazma Floors?</span>
      </h1>

      <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-16">
        <img src={require("../imges/imagehero2.jpeg")} alt="hero2" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0" />
        <p className="md:w-1/2 text-lg md:text-xl lg:text-2xl text-gray-700 md:pr-8">
          We have been in the flooring industry for over 2 years now and have worked with a diverse group of clientele, including homeowners, builders, contractors, and designers. Our experience has provided us with many unique challenges, and we have always managed to provide our clients with the products and services they needed to create an elegant and refined space.
        </p>
      </section>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Browse Our <span className="text-green-500">Flooring Categories</span>
      </h1>

      <div className="flex flex-wrap -mx-4 mb-16">
        <CardHome url={require("../imges/Rectangle 12.png")} title="Hardwood Flooring" path="/Hardwood" />
        <CardHome url={require("../imges/Group 33.png")} title="Vinyl Flooring" path="/Vinyl" />
        <CardHome url={require("../imges/3a.png")} title="Laminate Flooring" path="/Laminate" />
        <CardHome url={require("../imges/4a.png")} title="Carpet Flooring" path="/Carpet" />
        <CardHome url={require("../imges/5a.png")} title="Tiles Flooring" path="/Tiles" />
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="lg:w-2/3 flex flex-wrap">
          <img src={require("../imges/Rectangle 9.png")} alt="" className="w-1/2 p-2 rounded-lg" />
          <img src={require("../imges/Rectangle 10.png")} alt="" className="w-1/2 p-2 rounded-lg" />
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
          <h2 className="text-2xl font-bold mb-4">Hardwood, Engineered Hardwood, Laminate & Vinyl Flooring For Sale In Toronto</h2>
          <p className="text-gray-700">
            Along with great quality flooring supplies from top brands, we at Azazma Company Floors offer great flooring sales and deals. For the best selection of hardwood, laminate, vinyl and engineered hardwood flooring at the best prices, it doesn't get any better than Azazma Company Floors.
          </p>
        </div>
      </section>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Recent <span className="text-green-500">Installations</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={require(`../imges/m${i}.png`)} alt={`Installation ${i}`} className="w-full h-64 object-cover" />
            <p className="p-4 text-lg text-gray-700">Vinyl Flooring Installation in North York</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/Installation" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
          View all
        </Link>
      </div>
    </div>
  );
};

export default Home;