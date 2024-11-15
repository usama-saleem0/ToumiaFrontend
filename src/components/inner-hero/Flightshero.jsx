import React from "react";
import { useLocation } from 'react-router-dom';

import Hotel from '../../assets/Images/hero-bg-1.png'
import Flight from '../../assets/Images/hero-bg-2.png';


const Flightshero = () => {

  const location = useLocation();
  
  const backgroundImage = location.pathname === '/Flights' ? Flight : Hotel;


  return (
    <section className="inner-hero"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <div className="container">
        <div className="main-inner-hero">
          <div className="inner-hero-tital">
            <h2>Flights</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flightshero;
