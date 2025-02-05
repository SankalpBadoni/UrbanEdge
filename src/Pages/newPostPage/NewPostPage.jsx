import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Components/uploadWidget/UploadWidget";
import apiRequest from "../../Data/ApiRequest";

function NewPostPage() {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log(inputs)

    try {
      const res = await apiRequest.post("/properties", {
        title: inputs.title,
        description: description,
        type: inputs.type,
        propertyType: inputs.propertyType,
        price: parseInt(inputs.price),
        location: {
          address: inputs.address,
          city: inputs.city,
          state: inputs.state,
          coordinates: {
            lat: parseFloat(inputs.latitude),
            lng: parseFloat(inputs.longitude),
          },
        },
        features: {
          bedrooms: parseInt(inputs.bedrooms),
          bathrooms: parseInt(inputs.bathrooms),
          area: parseInt(inputs.area),
          parking: inputs.parking === "true",
        },
        images: images,
        owner: inputs.ownerId, // Ensure the user ID is passed correctly
      });
      console.log(res.data._id);
      navigate(`/${res.data.propertyId}`);
    } catch (error) {
      console.log(error);
      setError("Failed to create post");
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Add New Property</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 rounded" name="title" placeholder="Title" required />
            <input className="border p-2 rounded" name="price" type="number" placeholder="Price" required />
            <input className="border p-2 rounded" name="address" placeholder="Address" required />
            <input className="border p-2 rounded" name="city" placeholder="City" required />
            <input className="border p-2 rounded" name="state" placeholder="State" required />
            <input className="border p-2 rounded" name="latitude" placeholder="Latitude" required />
            <input className="border p-2 rounded" name="longitude" placeholder="Longitude" required />
            <input className="border p-2 rounded" name="bedrooms" type="number" min={1} placeholder="Bedrooms" required />
            <input className="border p-2 rounded" name="bathrooms" type="number" min={1} placeholder="Bathrooms" required />
            <input className="border p-2 rounded" name="area" type="number" placeholder="Total Area (sqft)" required />
            <select name="type" className="border p-2 rounded" required>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
            <select name="propertyType" className="border p-2 rounded" required>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Land">Land</option>
            </select>
            <select name="parking" className="border p-2 rounded" required>
              <option value="true">Parking Available</option>
              <option value="false">No Parking</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-2">Description</label>
            <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
          
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Add Property</button>
          {error && <span className="text-red-500">{error}</span>}
        </form>
      </div>
      
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt="Uploaded" className="w-20 h-20 object-cover rounded-lg" />
            ))}
          </div>
        )}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "sankalpbadoni",
            uploadPreset: "estate",
            maxImageFileSize: 20000000,
            folder: "propertyImages"
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
