import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

function Pin({ item }) {

  const { lat, lng } = item.location?.coordinates || {};

  if (!lat || !lng) return null; 

  return (
    <Marker position={[lat, lng]}>
      <Popup>
        <div className="flex gap-2">
          <img src={item.images[0]} alt="" className="w-2/5" />
          <div className="flex flex-col gap-1">
            <Link to={`/₹${item._id}`}>{item.title}</Link>
            <span>{item.features.bedrooms} bedroom</span>
            <b>₹{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
