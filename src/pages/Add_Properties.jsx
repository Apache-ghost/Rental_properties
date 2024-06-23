import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './index.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'house',
    category: 'sale',
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    location: '',
    images: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      images: [...formData.images, e.target.files[0]],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images') {
          value.forEach((image) => {
            formDataToSend.append('images', image);
          });
        } else {
          formDataToSend.append(key, value);
        }
      });

      await axios.post('/api/properties', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        title: '',
        description: '',
        type: 'house',
        category: 'sale',
        bedrooms: 0,
        bathrooms: 0,
        size: 0,
        location: '',
        images: [],
      });

      console.log('Property added successfully!');
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <section className="add-property">
      {/* Existing code */}
      <h1 className="heading">Add New Property</h1>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="type" className="form-label">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className="form-control"
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="flat">Flat</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="form-control"
          >
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size" className="form-label">Size (sq ft)</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="images" className="form-label">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageUpload}
            required
            className="form-control"
          />
          <div className="image-preview">
            {formData.images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="preview-image" />
                <button
                  type="button"
                  className="remove-image"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      images: formData.images.filter((_, i) => i !== index),
                    })
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="button">
          Add Property
        </button>
      </form>
    </section>
  );
};

export default AddProperty;
    
    