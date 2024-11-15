import { React, useState, useEffect } from "react";

import card1 from "../../assets/Images/Hotels.png";
import { Link } from "react-router-dom";


import Slider from "react-slick";
import axios from "axios";
import { baseurl } from "../../BaseUrl";

const RecommentedFlights = () => {
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS
// NOTE THIS HOTLELS



  const [responseMessage, setResponseMessage] = useState("");
  const [offers, setOffers] = useState([]);


  const postFlightData = async () => {
    try {
      const response = await axios.post(`${baseurl}/PostFlightsstactic`); // Replace with your actual backend endpoint URL

      // Handle successful response
      setResponseMessage(response.data);
      setOffers(response.data.duffelResponse?.data?.offers || []);
      console.log("Response from backend:", response.data);
    } catch (error) {
      // Handle error response
      setResponseMessage("Failed to post flight data.");
      console.error("Error posting flight data:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    postFlightData();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
      <div className="recommented--flights">
        <div className="container">
          <div className="recommented--flight--main">
            <div className="recommented--flight--main--top">

              <div className="recommented--flight--main--top--left">

                <h1>Recommended Hotels</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>





            </div>


            <div className="recommented--flight--main--bottom">
              <div className="slider-container">
                <Slider {...settings} className='hello-salider'>

                  {offers && offers.length > 0 ? (
                   offers.map((card, index) => (
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
                          <Link className="none-list" to='/Booking' style={{ textDecoration: 'none' }}>
                            <button>Book</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                  ) : (
                    <p>No offers available</p> // Message displayed if no offers are available
                  )}


                </Slider>
              </div>
            </div>

            <div className="recommented--flight--btn-box">
              <button>View All</button>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default RecommentedFlights
