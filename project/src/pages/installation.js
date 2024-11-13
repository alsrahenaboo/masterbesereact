



import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Calendar, MapPin, User, Package,Plus } from "lucide-react";
// import { MapPin, User, Package, Calendar, Plus } from "react-feather"; // Import icons

function Installation() {
  const installations = [
    {
      id: 1,
      image: require("../imges/m1.png"),
      description: "Vinyl Flooring Installation in Toronto",
    },
    {
      id: 2,
      image: require("../imges/m2.png"),
      description: "Vinyl Flooring Installation in Vancouver",
    },
    {
      id: 3,
      image: require("../imges/m3.png"),
      description: "Vinyl Flooring Installation in Ottawa",
    },
    {
      id: 4,
      image: require("../imges/m4.png"),
      description: "Vinyl Flooring Installation in Calgary",
    },
    {
      id: 5,
      image: require("../imges/m5.png"),
      description: "Vinyl Flooring Installation in Montreal",
    },
    {
      id: 6,
      image: require("../imges/m6.png"),
      description: "Vinyl Flooring Installation in Edmonton",
    },
    {
      id: 7,
      image: require("../imges/m1.png"),
      description: "Vinyl Flooring Installation in Halifax",
    },
    {
      id: 8,
      image: require("../imges/m2.png"),
      description: "Vinyl Flooring Installation in Winnipeg",
    },
    {
      id: 9,
      image: require("../imges/m3.png"),
      description: "Vinyl Flooring Installation in Quebec City",
    },
    {
      id: 10,
      image: require("../imges/m4.png"),
      description: "Vinyl Flooring Installation in Saskatoon",
    },
    {
      id: 11,
      image: require("../imges/m5.png"),
      description: "Vinyl Flooring Installation in Regina",
    },
    {
      id: 12,
      image: require("../imges/m6.png"),
      description: "Vinyl Flooring Installation in St. John's",
    },
    {
      id: 13,
      image: require("../imges/m1.png"),
      description: "Vinyl Flooring Installation in Mississauga",
    },
    {
      id: 14,
      image: require("../imges/m2.png"),
      description: "Vinyl Flooring Installation in Brampton",
    },
    {
      id: 15,
      image: require("../imges/m3.png"),
      description: "Vinyl Flooring Installation in Hamilton",
    },
    {
      id: 16,
      image: require("../imges/m4.png"),
      description: "Vinyl Flooring Installation in Kitchener",
    },
    {
      id: 17,
      image: require("../imges/m5.png"),
      description: "Vinyl Flooring Installation in London",
    },
    {
      id: 18,
      image: require("../imges/m6.png"),
      description: "Vinyl Flooring Installation in Windsor",
    },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const [installationsPerPage] = useState(8);
  const [installationData, setInstallationData] = useState({
    user: "",
    product: "",
    address: "",
    installationDate: "",
    technician: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const indexOfLastInstallation = currentPage * installationsPerPage;
  const indexOfFirstInstallation =
    indexOfLastInstallation - installationsPerPage;
  const currentInstallations = installations.slice(
    indexOfFirstInstallation,
    indexOfLastInstallation
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstallationData({ ...installationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/installations",
        installationData
      );
      console.log("Installation created:", response.data);

      Swal.fire({
        title: "Success!",
        text: "Your installation has been successfully booked!",
        icon: "success",
        confirmButtonColor: "#10B981",
        confirmButtonText: "Great!",
      });

      setInstallationData({
        user: "",
        product: "",
        address: "",
        installationDate: "",
        technician: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating installation:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while booking your installation.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-4">
            Professional Installation Services
          </h1>
          <p className="text-white text-center text-lg opacity-90">
            Expert vinyl flooring installation across Canada
          </p>
        </div>
      </div>

      {/* Recent Installations Section with Book Installation Button */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Recent <span className="text-green-500">Installations</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Browse our latest successful installations across different cities
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Book Installation
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentInstallations.map((installation) => (
            <div
              key={installation.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={installation.image}
                  alt={installation.description}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {installation.description}
                </h3>
                <div className="flex items-center text-green-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Professional Installation</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(Math.ceil(installations.length / installationsPerPage))].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === index + 1
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-white text-green-500 border border-green-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div></div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 float-right text-xl font-semibold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Book Your <span className="text-green-500">Installation</span>
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Complete the form below to schedule your installation with our
              professionals.
            </p>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-6 bg-white shadow-md rounded-lg"
            >
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-green-500" />
                <input
                  type="text"
                  name="user"
                  placeholder="Your Name"
                  value={installationData.user}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <Package className="w-6 h-6 text-green-500" />
                <input
                  type="text"
                  name="product"
                  placeholder="Product Type"
                  value={installationData.product}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-500" />
                <input
                  type="text"
                  name="address"
                  placeholder="Installation Address"
                  value={installationData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-green-500" />
                <input
                  type="date"
                  name="installationDate"
                  value={installationData.installationDate}
                  onChange={handleChange}
                  min={today}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-green-500" />
                <input
                  type="text"
                  name="technician"
                  placeholder="Preferred Technician (Optional)"
                  value={installationData.technician}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Book Installation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


export default Installation;
