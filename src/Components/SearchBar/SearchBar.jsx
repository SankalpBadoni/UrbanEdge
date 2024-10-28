import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchBar() {
  const [query, setQuery] = useState(
    {
      type: "buy",
      location: "",
      minPrice: 0,
      maxPrice:0,
    }
  )
  const switchType = (val)=>{
    setQuery(prev => ({...prev, type:val}))
  }
  return (
    <div>
      <div >
        <button onClick={() => switchType("buy")} className={`border border-black p-2 rounded-tl-lg px-6 ${query.type=== "buy" ? 'bg-black text-white' : 'bg-white text-black' }`}>Buy</button>
        <button onClick={() => switchType("rent")} className={`border border-black p-2 rounded-tr-lg px-6 ${query.type=== "rent" ? 'bg-black text-white' : 'bg-white text-black' }`}>Rent</button>
      </div>
      <div>
        <form action="" className='flex border border-black w-[535px]'>
            <input type="text" name='location' placeholder='City Location' className='h-12 p-2' />
            <input type="number" name='minPrice' min={0} max={1000000000} placeholder='Min Price' className='h-12 p-2' />
            <input type="number" name='maxPrice' min={0} max={1000000000} placeholder='Max Price' className='h-12 p-2' />
            <Link to='/list'><img src="assets/search1.jpg" className='w-16 h-12' alt="" /></Link>
        </form>
      </div>
    </div>
  )
} 

export default SearchBar
