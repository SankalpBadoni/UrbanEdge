import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className='flex gap-2'>
                <img src={item.img} alt="" className='w-2/5' />
                <div className='flex flex-col gap-1'>
                    <Link to={`/₹{item.id}`} >{item.title}</Link>
                    <span>{item.bedroom} bedroom</span>
                    <b>₹{item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin
