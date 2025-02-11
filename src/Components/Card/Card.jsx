import React from 'react';
import { Link } from 'react-router-dom';
import { listData } from '../../Data/DummyData';

function Card({ item }) {
  console.log(item);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * listData.length);
    return listData[randomIndex].img;
  };

  return (
    <div className="flex gap-6 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
      
      <div className="w-2/5">
        <Link to={`/${item._id}`}>
          <img
            src={getRandomImage()}
            alt=""
            className="rounded-lg h-44 w-full object-cover hover:opacity-90 transition-all"
          />
        </Link>
      </div>


      <div className="w-3/5 flex flex-col gap-4">
      
        <h2 className="text-lg font-semibold text-gray-800">
          <Link to={`/${item._id}`} className="hover:text-blue-600 transition-all">
            {item.title}
          </Link>
        </h2>

     
        <p className="flex items-center text-sm text-gray-600">
          <img src="assets/loc.png" className="h-4 mr-2" alt="" />
          <span>{item.location.address}</span>
        </p>

 
        <p className="bg-green-500 text-white px-2 py-1 rounded w-fit font-medium">
          ₹{item.price}
        </p>

      
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1">
              <img src="assets/bed.png" className="h-5" alt="" />
              <span className="text-sm text-gray-700">{item.features.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1">
              <img src="assets/bath.png" className="h-5" alt="" />
              <span className="text-sm text-gray-700">{item.features.bathrooms} Baths</span>
            </div>
          </div>

          
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <img src="assets/save.png" className="h-5" alt="Save" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <img src="assets/chat.png" className="h-5" alt="Chat" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
