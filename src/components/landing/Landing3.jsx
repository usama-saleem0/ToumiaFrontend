import React from "react";
import Marquee from "react-fast-marquee";
import mr1 from "../../assets/Images/mr-1.png"; 
import mr2 from "../../assets/Images/mr-2.png"; 
import mr3 from "../../assets/Images/mr-3.png"; 
import mr4 from "../../assets/Images/mr-4.png"; 
import mr5 from "../../assets/Images/mr-5.png"; 
import mr6 from "../../assets/Images/mr-6.png"; 
import mr7 from "../../assets/Images/mr-7.png"; 
import mr8 from "../../assets/Images/mr-8.png"; 
import mr9 from "../../assets/Images/mr-9.png"; 
import mr10 from "../../assets/Images/mr-10.png"; 
import mr11 from "../../assets/Images/mr-11.png"; 

const Landing3 = () => {
  // Array of image sources
  const images = [mr1, mr2, mr3, mr4, mr5, mr6, mr7, mr8, mr9, mr10, mr11];

  return (
    <section className="Marquee">
      <div className="main-Marquee">
        <div className="Marquee-tital">
          <h2>Cryptocurrency Friendly Travel Booking</h2>
        </div>
        <div className="Marquee-box">
          <Marquee pauseOnHover={true} speed={48.2} gradient={false}>
            <div className="Marquee-imger">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Marquee Image ${index + 1}`} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Landing3;
