import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";

function HomePage() {
  return (
    <div className="bg-gray-100">

      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Find Your Dream Property with Urban Edge
          </h1>
          <p className="mb-6">
            Discover a wide range of properties across prime locations.
          </p>
 
          <div className="flex justify-center items-center">
          <SearchBar/>
          </div>
          
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Luxury Villa",
                price: "₹ 1,12,00,000",
                description: "Beautiful villa located in a serene environment.",
                image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Urban Apartment",
                price: "$600,000",
                description: "Modern apartment with city views.",
                image: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Family Home",
                price: "$850,000",
                description: "Spacious home perfect for families.",
                image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  className="w-full h-64 object-cover object-center"
                  src={property.image}
                  alt={property.title}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-gray-600">{property.price}</p>
                  <p className="mt-2 text-gray-700">{property.description}</p>
                  <a
                    href="#"
                    className="mt-4 block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
                  >
                    View Property
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2025 Urban Edge. All rights reserved.</p>
            <div className="mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 mx-1"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400"> | </span>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 mx-1"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
