import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Components/uploadWidget/UploadWidget";
import apiRequest from "../../Data/ApiRequest";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Failed to create post");
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Add New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 rounded" name="title" placeholder="Title" required />
            <input className="border p-2 rounded" name="price" type="number" placeholder="Price" required />
            <input className="border p-2 rounded" name="address" placeholder="Address" required />
            <input className="border p-2 rounded" name="city" placeholder="City" required />
            <input className="border p-2 rounded" name="bedroom" type="number" min={1} placeholder="Bedroom" required />
            <input className="border p-2 rounded" name="bathroom" type="number" min={1} placeholder="Bathroom" required />
            <input className="border p-2 rounded" name="latitude" placeholder="Latitude" required />
            <input className="border p-2 rounded" name="longitude" placeholder="Longitude" required />
            <select name="type" className="border p-2 rounded">
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
            <select name="property" className="border p-2 rounded">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-2">Description</label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select name="utilities" className="border p-2 rounded">
              <option value="owner">Owner is responsible</option>
              <option value="tenant">Tenant is responsible</option>
              <option value="shared">Shared</option>
            </select>
            <select name="pet" className="border p-2 rounded">
              <option value="allowed">Allowed</option>
              <option value="not-allowed">Not Allowed</option>
            </select>
            <input className="border p-2 rounded" name="income" placeholder="Income Policy" />
            <input className="border p-2 rounded" name="size" type="number" min={0} placeholder="Total Size (sqft)" />
            <input className="border p-2 rounded" name="school" type="number" min={0} placeholder="School" />
            <input className="border p-2 rounded" name="bus" type="number" min={0} placeholder="Bus" />
            <input className="border p-2 rounded" name="restaurant" type="number" min={0} placeholder="Restaurant" />
          </div>
          
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Add</button>
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
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
