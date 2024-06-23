import React from 'react'
import './Hero.css'
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-Container " >
        {/* left side */}
        <div className="white-gradient"> </div>
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y: "1rem", opacity: 0}}
            animate={{y:0 , opacity: 1}}
            transition= {{
              duration: 2,
              type: "spring"
            }}
            >
              Find Your Dream<br/> Home Today <br/>
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
             are you ready to strat the search for your home? 
            </span>
            <span>
            Look no futher Move-in is Here for you.
            </span>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            </div>
        <div className="FlexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={800} end={3500} duration={4}/>
              <span>+</span>
              </span>
              <span> Premium Products</span>

          </div>
          
          </div>
        <div className="FlexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={250} end={1500} duration={4}/>
              <span>+</span>
              </span>
              <span>Satisfied Customers</span>
       
          </div>
          </div>
        <div className="FlexCenter stats">
          <div className="flexColCenter stat">
              <span>
              <CountUp end={50}/>
              <span>+</span>
              </span>
              <span>Awards Winnings</span>
          </div>
          </div>
       
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div className="image-container"
             initial={{x: "3rem", opacity: 0}}
             animate={{x:0 , opacity: 1}}
             transition= {{
               duration: 2,
               type: "spring"
             }}
          >
            <img src="./public\images\hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
   
  )
}

export default Hero

