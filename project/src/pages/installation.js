import React from "react";

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


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
        Recent <span className="text-green-500">Installations</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {installations.map((installation) => (
          <div
            key={installation.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={installation.image}
              alt={installation.description}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {installation.title}
              </h2>
              <p className="text-gray-700">{installation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Installation;
