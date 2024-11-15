import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import card1 from "../../assets/Images/Flights.png";
import { Link } from "react-router-dom";


const Flights1 = () => {


  const getStoredFlightData = () => {
    const storedFlightData = localStorage.getItem('flightData');
    return storedFlightData ? JSON.parse(storedFlightData) : null;
  };

  const storedFlight = getStoredFlightData();
  const offers = storedFlight?.duffelResponse?.data?.offers || [];




  

  return (
    <>


      <section className="Flights1">
        <div className="container">
          <div className="main-Flights1">

            <div className="Flights1-box">

              {offers.map((card, index) => (
                <div className="Package-card" key={index}>
                  <div className="Package-card-img">
                    <img src={card1} alt="Image" />
                  </div>
                  <div className="Package-tital-box">
                    <div className="Person-Package NEW-Paris">
                      <p>Return flight</p>
                      <p>From</p>
                    </div>
                    <div className="NEW-tiatal-boxing">
                      <h2>{card.slices[0].origin.city_name} to {card.slices[0].destination.city.name}</h2>
                      <h4>{card.total_amount}</h4>
                    </div>
                    <div className="View-BTN-BOX">
                      <Link className="none-list" to={`/FlightDetails/${card.id}`}  style={{ textDecoration: 'none' }}>
                        <button>View</button>
                      </Link>
                      <Link className="none-list"  to={`/Booking/${card.id}`}   style={{ textDecoration: 'none' }}>
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

export default Flights1;

