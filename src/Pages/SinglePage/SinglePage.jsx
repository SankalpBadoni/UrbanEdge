import React from 'react'
import { singlePostData, userData } from '../../Data/DummyData'
import Slider from '../../Components/Slider/Slider'
import Map from '../../Components/Map/Map'
import { useLoaderData } from 'react-router-dom'
import DOMPURIFY from "dompurify"

function SinglePage() {
    const {property} = useLoaderData();
    console.log(property)
    return (
        <>
            <div className='flex h-full'>
                <div className='w-3/5 pr-12'>
                    <div className='mb-7'> <Slider images={singlePostData.images} /> </div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-7'>
                                <h1 className='text-2xl font-semibold'>{property.title}</h1>
                                <div className='flex items-center'>
                                    <img src="assets/loc.png" className='h-4' alt="" />
                                    <span>{property.location.address}</span>
                                </div>
                                <h4 className='bg-yellow-200 w-fit mb-4 px-3 py-1 rounded-lg'>₹ {property.price} </h4>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={property.owner.profilePicture} className='w-10 h-5' alt="" />
                                <span>{property.owner.username} </span>
                            </div>
                        </div>
                        <div className='mb-4' dangerouslySetInnerHTML={{__html:DOMPURIFY.sanitize(property.description)}}>
                           
                        </div>
                        <div className='flex justify-between '>
                            <button className='flex border  border-black p-2 items-center gap-1'>
                                <img src="assets/chat.png" className='h-5' alt="" />
                                <span>Send a Messgae</span>
                            </button>
                            <button className='flex border border-black p-2 items-center gap-1'>
                                <img src="assets/save.png" className='h-5' alt="" />
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-2/5 bg-pink-100 pr-5 pl-5'>
                    <div className='mb-4'>
                        <h1 className='font-bold mb-2'>General</h1>

                        <div className='bg-white flex flex-col gap-3 p-2'>
                            <div className='flex items-center gap-3'>
                                <img src="assets/utility.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>Utilities</span>
                                    <p className='text-xs'>Renter is responsible</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src="assets/pet.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>Pet Policy</span>
                                    <p className='text-xs'>Pets are allowed</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src="assets/propfee.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>Property fees</span>
                                    <p className='text-xs'>Must have 4x the rent as income</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1 className='font-bold mb-3'>Room Sizes</h1>
                        <div className='flex justify-between mb-5'>
                            <div className='flex gap-1 bg-white'>
                                <img src="assets/size.png" className='w-7' alt="" />
                                <span>{property.features.area} sqm</span>
                            </div>
                            <div className='flex gap-1 bg-white'>
                                <img src="assets/bed.png" className='w-7' alt="" />
                                <span>{property.features.bedrooms} Bedroom</span>
                            </div>
                            <div className='flex gap-1 bg-white'>
                                <img src="assets/bath.png" className='w-7' alt="" />
                                <span>{property.features.bathrooms} Bathroom</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>Nearby Places</h1>
                        <div className='bg-white flex justify-between p-2 mb-4'>
                            <div className='flex items-center gap-3'>
                                <img src="assets/school.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>School</span>
                                    <p className='text-xs'>{singlePostData.school}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src="assets/bus.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>Bus Stop</span>
                                    <p className='text-xs'>{singlePostData.bus}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src="assets/restaurant.png" className='w-8' alt="" />
                                <div>
                                    <span className='font-bold'>Restaurant</span>
                                    <p className='text-xs'>{singlePostData.restaurant}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>Location</h1>
                        <div className='h-96 w-96 mb-4'>
                            <Map items={[singlePostData]} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SinglePage
