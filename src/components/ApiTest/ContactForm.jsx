import { useState } from "react";

const ContactForm = ({ existingProperty = {}, updateCallback = () => {} }) => {
  const [category, setCategory] = useState(existingProperty.category || "");
  const [cost, setCost] = useState(existingProperty.cost || "");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(existingProperty.location || "");
  const [description, setDescription] = useState(existingProperty.description || "");

  const updating = Object.keys(existingProperty).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("cost", cost);
    formData.append("location", location);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const url = `http://127.0.0.1:5000/${updating ? `update_property/${existingProperty.propertyId}` : `create_property`}`;
    const options = {
      method: updating ? "PUT" : "POST",
      body: formData,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        updateCallback();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
          Category:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="cost">
          Cost:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
          Image:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
          Location:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            updating ? "bg-yellow-500 hover:bg-yellow-700" : ""
          }`}
          type="submit"
        >
          {updating ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;