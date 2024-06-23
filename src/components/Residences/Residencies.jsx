import React, { useEffect, useState } from 'react';
import PropertyCard from '../Residences/PropertyCard';
import data from "../../utils/slider.json";
import './Residencies.css';
import SearchBar from '../Hero/Seachbar/SearchBar';
import './index.css';
import Card from '../Card/Card';

const Property = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/properties");
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      const data = await response.json();
      setProperties(data.properties);
      console.log(data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      alert("Error fetching properties. Please try again later.");
    }
  };

  

  
  return (
    <section className="wrapper">
      <div className="FlexColCenter paddings innerWidth properties-container">
           <Card props={properties} />
        
      </div>
    </section>
  );
};

export default Property;