import React from 'react'
import "./PropertyCard.css";

const PropertyCard = ( {card}) => {
  return (
    <div className="flexColStart r-card">
    <img src={card.image} alt="home"/>
   
    <span>
      <span>{card.price}</span>
      <span style={{color: "orange"}}>XAF</span>
    </span>
    <span className="primaryText">{card.name}</span>
    <span className="secondaryText">{card.detail}</span>
  </div>
  )
}

export default PropertyCard;