import React from 'react'

export default function Filter() {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <h1 className='text-3xl'>Search results for</h1>
        <div>
          <div className='flex flex-col '>
            <label htmlFor="City" className=''>Location</label>
            <input type="text" id='city' name='city' placeholder='City Location' className='border p-2' />
          </div>
        </div>

        <div className='flex gap-3 mb-11'>
          <div className='flex flex-col'>
            <label htmlFor="type">Type</label>
            <select name="type" id="type" className='border-2 p-1 mt-1'>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="property">Property</label>
            <select name="property" id="property" className='border-2 p-1 mt-1'>
            <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="minPrice">Min Price</label>
            <input type="number" id='minPrice' name='minPrice' placeholder='any' className='w-24 p-1 border-2 mt-1' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="maxPrice">Max Price</label>
            <input type="number" id='maxPrice' name='maxPrice' placeholder='any' className='w-24 p-1 border-2 mt-1' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="Bedroom">Bedroom</label>
            <input type="number" id='bedroom' name='bedroom' placeholder='any' className='w-24 p-1 border-2 mt-1' />
          </div>
          <button className='w-20 h-10'><img src="assets/search1.jpg" alt="" /></button>
        </div>
      </div>
    </>
  )
}
