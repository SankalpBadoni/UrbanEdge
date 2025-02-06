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
    <div>
      <div>
        <button
          onClick={() => switchType("buy")}
          className={`border border-black p-2 rounded-tl-lg px-6 ${
            query.type === "buy"
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => switchType("rent")}
          className={`border border-black p-2 rounded-tr-lg px-6 ${
            query.type === "rent"
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
          }`}
        >
          Rent
        </button>
      </div>
      <div>
        <form
          action=""
          className="flex border border-black w-[535px] bg-transparent"
        >
          <input
            type="text"
            name="city"
            placeholder="City"
            className="h-12 p-2 bg-transparent border border-gray-800"
            onChange={handleChange}
          />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000000}
            placeholder="Min Price"
            className="h-12 p-2 bg-transparent border border-gray-800"
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000000}
            placeholder="Max Price"
            className="h-12 p-2 bg-transparent border border-gray-800"
            onChange={handleChange}
          />
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-4 rounded"
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
