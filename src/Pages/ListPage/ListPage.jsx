import React from 'react'
import { listData } from '../../Data/DummyData'
import Filter from '../../Components/Filter/Filter'
import Card from '../../Components/Card/Card'
import Map from '../../Components/Map/Map'

export default function ListPage() {
    const data = listData
  return (
    <>
        <div className='flex h-screen'>
            <div className='w-3/5 pr-12 flex flex-col overflow-y-auto'>
              <Filter/>
              <div className='flex flex-col gap-12 overflow-y-auto'>
              {data.map(item => (
                  <Card key = {item.id} item={item}/> //passing item as a prop so that we can access item.properties
              ))}
              </div>
              
            </div>
            
            <div className='w-2/5 bg-pink-100'>
              <Map items={data}/>
            </div>
        </div>
    </>
  )
}
