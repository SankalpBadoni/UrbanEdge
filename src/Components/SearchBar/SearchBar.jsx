import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
     
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => switchType("buy")}
          className={`px-6 py-2 border-2 rounded-lg ${
            query.type === "buy" ? "bg-teal-500 text-white" : "bg-white text-teal-500"
          } transition-colors duration-300`}
        >
          Buy
        </button>
        <button
          onClick={() => switchType("rent")}
          className={`px-6 py-2 border-2 rounded-lg ${
            query.type === "rent" ? "bg-teal-500 text-white" : "bg-white text-teal-500"
          } transition-colors duration-300`}
        >
          Rent
        </button>
      </div>

    
      <div>
        <form className="flex flex-wrap gap-4 items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="h-12 p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 flex-grow min-w-[220px]"
            onChange={handleChange}
          />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000000}
            placeholder="Min Price"
            className="h-12 p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 flex-grow min-w-[220px]"
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000000}
            placeholder="Max Price"
            className="h-12 p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 flex-grow min-w-[220px]"
            onChange={handleChange}
          />
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice || 100000000}`}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg border-2 border-teal-500 hover:border-teal-600 transition-all duration-300"
            type="button"
          >
            Search
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
