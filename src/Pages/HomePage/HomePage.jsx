import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'

function HomePage() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='flex items-center justify-between px-12 py-8'>
        <div className='w-3/5 p-4 animate-fade-in'>
          <h1 className='text-5xl font-extrabold text-gray-800 leading-snug tracking-tight'>
            Find Your Dream Home <br /> with Ease and Confidence
          </h1>
          <p className='mt-6 mb-6 text-lg text-gray-600 leading-relaxed'>
            Explore properties that match your style and budget. With our trusted listings and seamless search experience, turning your dream into reality is just a click away.
          </p>
          <SearchBar/>

          <div className='flex justify-between mt-8'>
            <div className='text-center animate-bounce'>
              <h1 className='text-3xl font-bold text-indigo-600'>16+</h1>
              <h2 className='text-gray-700'>Years of Expertise</h2>
            </div>
            <div className='text-center animate-pulse'>
              <h1 className='text-3xl font-bold text-indigo-600'>200</h1>
              <h2 className='text-gray-700'>Awards Won</h2>
            </div>
            <div className='text-center animate-fade-in'>
              <h1 className='text-3xl font-bold text-indigo-600'>1000+</h1>
              <h2 className='text-gray-700'>Properties Ready</h2>
            </div>
          </div>
        </div>

        <div className='w-2/5 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 rounded-lg animate-fade-in'></div>
          <img 
            src='assets/bg.png' 
            alt='Real Estate Background' 
            className='rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 animate-zoom-in'
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
