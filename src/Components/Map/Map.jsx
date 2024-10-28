import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from '../Pin/Pin'

function Map({items} ) {
  return (
    <MapContainer center={[13.0674, 80.2376]} zoom={4} scrollWheelZoom={true} className='w-full h-full'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item => (
        <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
  )
}

export default Map
