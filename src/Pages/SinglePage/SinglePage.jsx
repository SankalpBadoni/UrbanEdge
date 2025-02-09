import React, { useContext, useState } from 'react'
import { singlePostData, userData } from '../../Data/DummyData'
import Slider from '../../Components/Slider/Slider'
import Map from '../../Components/Map/Map'
import { useLoaderData, useNavigate } from 'react-router-dom'
import DOMPURIFY from "dompurify"
import { AuthContext } from '../../Context/AuthContext'
import apiRequest from '../../Data/ApiRequest'

function SinglePage() {
    const property = useLoaderData();
    const {currUser} = useContext(AuthContext)
    console.log(property)
    const [saved, setSaved] = useState(property.isSaved)
    const navigate = useNavigate()
    console.log(property.isSaved)
     
    const handleSave = async () => {
        if(!currUser){
            navigate("/login")
            return
        }
        
        setSaved((prev)=>!prev)
        try {
            // Debug logs
            console.log('Property object:', property);
            console.log('Property ID to save:', property.property._id);
            
            const response = await apiRequest.post("/users/save", {
                propertyId: property.property._id,
                userId: currUser._id,
            });
            
            
            console.log('Save response:', response.data);
        } catch (error) {
            console.log('Error details:', {
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers
            });
            setSaved((prev)=>!prev)
        }
    }
    return (
        <>
            <div className='flex h-full'>
                <div className='w-3/5 pr-12'>
                    <div className='mb-7'> <Slider images={singlePostData.images} /> </div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-7'>
                                <h1 className='text-2xl font-semibold'>{property.property.title}</h1>
                                <div className='flex items-center'>
                                    <img src="assets/loc.png" className='h-4' alt="" />
                                    <span>{property.property.location.address}</span>
                                </div>
                                <h4 className='bg-yellow-200 w-fit mb-4 px-3 py-1 rounded-lg'>₹ {property.property.price} </h4>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={property.property.owner.profilePicture} className='w-10 h-5' alt="" />
                                <span>{property.property.owner.username} </span>
                            </div>
                        </div>
                        <div className='mb-4' dangerouslySetInnerHTML={{__html:DOMPURIFY.sanitize(property.property.description)}}>
                           
                        </div>
                        <div className='flex justify-between '>
                            <button className='flex border  border-black p-2 items-center gap-1'>
                                <img src="assets/chat.png" className='h-5' alt="" />
                                <span>Send a Messgae</span>
                            </button>
                            <button className='flex border border-black p-2 items-center gap-1' onClick={handleSave}>
                                <img src="assets/save.png" className='h-5' alt="" />
                                <span>{saved? "Saved": "Save the place"}</span>
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
                                <span>{property.property.features.area} sqm</span>
                            </div>
                            <div className='flex gap-1 bg-white'>
                                <img src="assets/bed.png" className='w-7' alt="" />
                                <span>{property.property.features.bedrooms} Bedroom</span>
                            </div>
                            <div className='flex gap-1 bg-white'>
                                <img src="assets/bath.png" className='w-7' alt="" />
                                <span>{property.property.features.bathrooms} Bathroom</span>
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
