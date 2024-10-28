import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'

function HomePage() {
  return (
    <div>
      <div className='flex'>
        <div className='w-3/5 p-4'>
          <h1 className='text-4xl font-bold '>Explore Homes Near You with Ease and Confidence</h1>
          <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe dignissimos repellat distinctio officia. Laudantium repellat nemo velit accusamus, soluta nostrum ratione saepe odit nesciunt. Amet enim neque mollitia nobis.</p>
          <SearchBar/>

          <div className='flex justify-between mt-4'>
            <div>
              <h1 className='text-2xl font-bold'>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>

        <div className='w-2/5 bg-pink-100 '>
          <img src="assets/bg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
