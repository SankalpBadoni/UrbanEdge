import React from 'react'

function Slider({images}) {
  return (
    <>
        <div className='flex gap-4 items-center '>
            <div className='w-4/5 rounded'>
                <img src={images[0]} alt="" />
            </div>

            <div className='w-1/5 flex flex-col gap-2 rounded'>
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
                <img src={images[3]} alt="" />
            </div>
        </div>
    
    
    </>
  )
}

export default Slider
