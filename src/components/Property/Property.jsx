import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'; 
import "swiper/css";
import 'swiper/css/navigation';
import  './Property.css';
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';
import PropertyCard from '../Residences/PropertyCard';
import  "./index.css";
const Property = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Properties</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
              <PropertyCard card={card} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Property ;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={()=> swiper.slidePrev()} >&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};