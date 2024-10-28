import React from 'react'
import { Link } from 'react-router-dom'

function Card({item}) {
  return (
    <>
      <div className='flex gap-5'>
        <div className='w-2/5'>
          <Link to={`${item.id}`} >
            <img src={item.img} alt="" className='rounded h-44' />
          </Link>
        </div>
        <div className='w-3/5 flex flex-col gap-6'>
          <h2>
            <Link to={`${item.id}`}>{item.title}</Link>
          </h2>
          <p className='flex items-center'>
            <img src="assets/loc.png" className='h-4' alt="" />
            <span>{item.address}</span>
          </p>
          <p className='bg-orange-300 w-fit'>₹{item.price}</p>

          <div className='flex gap-12'>
            <div className='flex gap-5'>
            <div className='flex items-center gap-1 bg-gray-200 w-fit rounded'>
                <img src="assets/bed.png" className='h-5' alt="" />
                <span>{item.bedroom} Bedroom</span>
              </div>
              <div className='flex gap-1 bg-gray-200 w-fit rounded'>
                <img src="assets/bath.png" className='h-5' alt="" />
                <span>{item.bathroom} Bathroom</span>
              </div>
            </div>
            <div className='flex gap-4'>
              <div><img src="assets/save.png" className='h-5' alt="" /></div>
              <div><img src="assets/chat.png" className='h-5' alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
