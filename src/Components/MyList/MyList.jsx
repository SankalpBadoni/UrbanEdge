import React from 'react'
import { listData } from '../../Data/DummyData'
import Card from '../Card/Card'

function MyList() {
    return (
        <>
            <div className='flex flex-col gap-4 px-6'>
                {listData.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}

export default MyList
