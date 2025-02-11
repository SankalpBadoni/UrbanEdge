import React, { useContext, useState } from 'react';
import { singlePostData, userData } from '../../Data/DummyData';
import Slider from '../../Components/Slider/Slider';
import Map from '../../Components/Map/Map';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DOMPURIFY from "dompurify";
import { AuthContext } from '../../Context/AuthContext';
import apiRequest from '../../Data/ApiRequest';

function SinglePage() {
    const property = useLoaderData();
    const { currUser } = useContext(AuthContext);
    const [saved, setSaved] = useState(property.isSaved);
    const navigate = useNavigate();

    const handleSave = async () => {
        if (!currUser) {
            navigate("/login");
            return;
        }

        setSaved((prev) => !prev);
        try {
            await apiRequest.post("/users/save", {
                propertyId: property.property._id,
                userId: currUser._id,
            });
        } catch (error) {
            setSaved((prev) => !prev);
        }
    };

    return (
        <div className="flex h-full bg-gray-100 p-8">
            {/* Left Content */}
            <div className="w-3/5 pr-10">
                <div className="mb-7 shadow-lg rounded-xl overflow-hidden">
                    <Slider images={singlePostData.images} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-semibold mb-2">{property.property.title}</h1>
                            <div className="flex items-center gap-2 text-gray-600">
                                <img src="assets/loc.png" className="h-5" alt="Location" />
                                <span>{property.property.location.address}</span>
                            </div>
                            <h4 className="bg-yellow-300 w-fit px-4 py-2 mt-3 text-lg rounded-lg font-medium">
                                ₹ {property.property.price}
                            </h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={property.property.owner.profilePicture} className="w-12 h-12 rounded-full shadow-md" alt="Owner" />
                            <span className="mt-2 text-gray-800">{property.property.owner.username}</span>
                        </div>
                    </div>
                    <div 
                        className="text-gray-700 leading-7" 
                        dangerouslySetInnerHTML={{ __html: DOMPURIFY.sanitize(property.property.description) }} 
                    />
                    <div className="flex justify-between mt-6">
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                            <img src="assets/chat.png" className="h-5" alt="Chat" />
                            <span>Send a Message</span>
                        </button>
                        <button 
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition ${
                                saved ? "bg-green-500 text-white" : "border border-gray-400 text-gray-700"
                            }`}
                            onClick={handleSave}
                        >
                            <img src="assets/save.png" className="h-5" alt="Save" />
                            <span>{saved ? "Saved" : "Save the place"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-2/5 bg-white p-6 rounded-lg shadow-md">
                {/* General Information */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold mb-3">General</h1>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        {[
                            { icon: "utility.png", title: "Utilities", description: "Renter is responsible" },
                            { icon: "pet.png", title: "Pet Policy", description: "Pets are allowed" },
                            { icon: "propfee.png", title: "Property Fees", description: "Must have 4x the rent as income" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 mb-3">
                                <img src={`assets/${item.icon}`} className="w-8" alt={item.title} />
                                <div>
                                    <span className="font-bold">{item.title}</span>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Room Sizes */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold mb-3">Room Sizes</h1>
                    <div className="flex justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                        {[
                            { icon: "size.png", value: `${property.property.features.area} sqm` },
                            { icon: "bed.png", value: `${property.property.features.bedrooms} Bedroom` },
                            { icon: "bath.png", value: `${property.property.features.bathrooms} Bathroom` }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src={`assets/${item.icon}`} className="w-7" alt="Feature" />
                                <span className="text-gray-700">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nearby Places */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold mb-3">Nearby Places</h1>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        {[
                            { icon: "school.png", title: "School", value: singlePostData.school },
                            { icon: "bus.png", title: "Bus Stop", value: singlePostData.bus },
                            { icon: "restaurant.png", title: "Restaurant", value: singlePostData.restaurant }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 mb-3">
                                <img src={`assets/${item.icon}`} className="w-8" alt={item.title} />
                                <div>
                                    <span className="font-bold">{item.title}</span>
                                    <p className="text-sm text-gray-600">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Section */}
                <div>
                    <h1 className="text-xl font-bold mb-3">Location</h1>
                    <div className="h-64 w-full overflow-hidden rounded-lg shadow-lg">
                        <Map items={[singlePostData]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
