import React from 'react';
import './Card.css';

function Card({props}) {
  const listitems = props.map((prop) => (
    <div className="card" key={prop.property_id}  >
      <img className="card-img" src={prop.image} alt="House Picture" />
      <p className="card-text text-gray-500">{prop.cost} FCFA</p>
      <h2 className="card-title text-xl font-bold">{prop.location}</h2>
      <p className="card-text text-gray-500">{prop.category}</p>
      
    </div>
  ));

  const proofs = [
    { id: 1, value: "20+", var: "Years in the industry" },
    { id: 2, value: "90%", var: "Customers satisfaction" },
    { id: 3, value: "10K", var: "Properties Sold" },
    { id: 4, value: "50+", var: "Country Served" },
  ];

  const socials = proofs.map((proof) => (
    <div className="social-card" key={proof.id}>
      <h2 className="socials-value text-2xl font-bold">{proof.value}</h2>
      <p className="card-text text-gray-500">{proof.var}</p>
    </div>
  ));

  return (
    <div className="container mx-auto py-16">
      <div className="heading">
        <div className="title">
          <h1 className="heady text-3xl font-bold mb-2">Explore Our Latest Properties</h1>
          <p className="texty text-gray-700">
            See the latest uploaded properties in our platform
          </p>
        </div>
        <div className="search">
          <input
            type="text"
            className="border-gray-300 border rounded-md px-4 py-2 mr-2"
            placeholder="Search Location"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 button">
            Search
          </button>
        </div>
      </div>

      <div className="property grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {listitems}
      </div>

      <div className="socialProof grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {socials}
      </div>
    </div>
  );
}

export default Card;
