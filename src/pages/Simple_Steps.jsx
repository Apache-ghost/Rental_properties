import React from 'react';
import './index.css';


const StepsSection = () => {
  return (
    <section className="steps">
      <h1 className="heading">3 simple steps</h1>
      <div className="box-container">
        <div className="box">
          <img src="./public/images/step-1.png" alt="" />
          <h3>Search Property</h3>
<p>Find your ideal property effortlessly.</p>
        </div>
        <div className="box">
          <img src="./public/images/step-2.png" alt="" />
          <h3>Contact Agents</h3>
<p>Connect with agents easily.</p>
        </div>
        <div className="box">
          <img src="./public/images/step-3.png" alt="" />
          <h3>Enjoy Property</h3>
<p>Experience your dream property.</p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;