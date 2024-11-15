import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import card1 from "../../assets/Images/Hotels.png"; 
import { Link } from "react-router-dom";

const Hotels1 = () => {


  const cardData = [
    {
      price: "Paris",
      duration: "01 Night",
      title: "Costa Brava",
      description: "$600",
    
      img: card1,
    },


    {
        price: "Paris",
        duration: "01 Night",
        title: "Costa Brava",
        description: "$600",
        img: card1,
      },
    

    {
        price: "Paris",
        duration: "01 Night",
        title: "Costa Brava",
        description: "$600",
      
        img: card1,
      },
      {
        price: "Paris",
        duration: "01 Night",
        title: "Costa Brava",
        description: "$600",
      
        img: card1,
      },

      {
        price: "Paris",
        duration: "01 Night",
        title: "Costa Brava",
        description: "$600",
        img: card1,
      },
      {
        price: "Paris",
        duration: "01 Night",
        title: "Costa Brava",
        description: "$600",
        img: card1,
      },
    // You can duplicate or change the content for the remaining cards


  




  ];



  return (
    <>


      <section className="Flights1">
        <div className="container">
          <div className="main-Flights1">

            <div className="Flights1-box">
              {cardData.map((card, index) => (

                <div className="Package-card" key={index}>
                  <div className="Package-card-img">
                    <img src={card.img} alt={`Package ${index + 1}`} />
                  </div>
                  <div className="Package-tital-box">
                    <div className="Person-Package NEW-Paris">
                      <p>{card.price}</p>
                      <p>{card.duration}</p>
                    </div>

                    <div className="NEW-tiatal-boxing">
                      <h2>{card.title}</h2>
                      <h4>{card.description}</h4>
                    </div>


                    <div className="View-BTN-BOX">
                    <Link className="none-list" to='/HotelDetails' style={{textDecoration:'none'}}>
                      <button>View</button>
                      </Link>
                      <Link className="none-list" to='/Booking' style={{textDecoration:'none'}}>
                      <button>Book</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="Flights1-btn-box">
              <button>
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotels1;

