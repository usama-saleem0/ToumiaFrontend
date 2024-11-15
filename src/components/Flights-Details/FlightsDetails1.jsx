import React from "react";
import flight from "../../assets/Images/flight.png";
import amen1 from "../../assets/Images/amen1.png";
import amen2 from "../../assets/Images/amen2.png";
import amen3 from "../../assets/Images/amen3.png";
import amen4 from "../../assets/Images/amen4.png";
import amen5 from "../../assets/Images/amen5.png";
import enquiryplane from "../../assets/Images/enquiryplane.png";
import phone from "../../assets/Images/phone.png";
import email from "../../assets/Images/email .png";
import { useParams, Link } from "react-router-dom";
import FlightcardsOther from "./FlightcardsOther";





const FlightDetails1 = () => {


  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH
  // WORKING FOR LOCALSTOAGE OF SEARCH



  // const { id } = useParams();

  // console.log("Flight ID:", id);


  // const getStoredFlightData = () => {
  //   const storedFlightData = localStorage.getItem('flightData');
  //   return storedFlightData ? JSON.parse(storedFlightData) : null;
  // };

  // const storedFlight = getStoredFlightData();
  // const offers = storedFlight?.duffelResponse?.data?.offers || [];

  // // Find the specific flight offer by matching the id
  // const flightDetails = offers.find((offer) => offer.id === id);

  // if (!flightDetails) return <p>Flight details not found.</p>;



  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC 
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC
  // WORKING FOR LOCALSTOAGE OF FLIGHTSSTATIC

  //   const { id } = useParams();

  // console.log("Flight ID:", id);

  // const getStoredFlightData = () => {
  //   const storedFlightData = localStorage.getItem('flightData');
  //   return storedFlightData ? JSON.parse(storedFlightData) : [];
  // };

  // const offers = getStoredFlightData();

  // // Find the specific flight offer by matching the id
  // const flightDetails = offers.find((offer) => offer.id === id);

  // if (!flightDetails) return <p>Flight details not found.</p>;





  // WORKING FOR LOCALSTOAGE OF BOTH 
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH
  // WORKING FOR LOCALSTOAGE OF BOTH

  const { id } = useParams();

  console.log("Flight ID:", id);

  const getStoredFlightData = () => {
    const storedFlightData = localStorage.getItem('flightData');
    if (!storedFlightData) return [];

    const parsedData = JSON.parse(storedFlightData);

    // Check if the data is in the `duffelResponse.data.offers` structure
    if (parsedData.duffelResponse?.data?.offers) {
      return parsedData.duffelResponse.data.offers;
    }

    // Otherwise, assume it's a flat `offers` array
    return parsedData;
  };

  const offers = getStoredFlightData();

  // Find the specific flight offer by matching the id
  const flightDetails = offers.find((offer) => offer.id === id);

  if (!flightDetails) return <p>Flight details not found.</p>;







  return (
    <div className="flight-section">
      <div className="flight-outer-section">
        {" "}
        <div className="container">
          <div className="main-flight">
            <div className="flight-detail-col">
              <div className="flight-detail-div">
                <div className="flight-img">
                  <img src={flight} alt="" />
                </div>
                <div className="flight-details">
                  <h5>{flightDetails.slices[0].origin.city_name} to {flightDetails.slices[0].destination.city.name}</h5>
                  <h6>${flightDetails.total_amount}</h6>
                </div>
                <p>Return Flight</p>
                <div className="overview">
                  <div className="overview-col flight-padding">
                    <h2>Overview</h2>
                    <div className="key-value">
                      <div className="key">
                        <p>Airline:</p>
                      </div>
                      <div className="key">
                        <p>{flightDetails.slices[0].segments[0].operating_carrier.name}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Flight Type:</p>
                      </div>
                      <div className="key">
                        <p>{flightDetails.cabin_class}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Fare Type:</p>
                      </div>
                      <div className="key">
                        <p>{flightDetails.passengers[0].fare_type || "Refundable"}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Seats & Baggage:</p>
                      </div>
                      <div className="key">
                        <p>{flightDetails.slices[0].segments[0].passengers.baggages ? [0]?.quantity : ""}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Base Fare:</p>
                      </div>
                      <div className="key">
                        <p>${flightDetails.base_amount}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Tax & Fees:</p>
                      </div>
                      <div className="key">
                        <p>${flightDetails.tax_amount || "00.00"}</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Total Price:</p>
                      </div>
                      <div className="key">
                        <p>${flightDetails.total_amount}</p>
                      </div>
                    </div>
                  </div>
                  <div className="amenities-col">
                    <h2>Amenities</h2>
                    <div className="amen-detail">
                      <div className="amen-img1">
                        <img src={amen1} alt="" />
                      </div>
                      <p>
                        {flightDetails.slices[0]?.segments[0]?.passengers?.cabin?.[0]?.amenities?.[0]?.wifi?.[0]?.available ?? "Wifi"}
                      </p>

                    </div>
                    <div className="amen-detail">
                      <div className="amen-img2">
                        <img src={amen2} alt="" />
                      </div>
                      <p>Coffee</p>
                    </div>
                    <div className="amen-detail">
                      <div className="amen-img2">
                        <img src={amen3} alt="" />
                      </div>
                      <p>Drink</p>
                    </div>
                    <div className="amen-detail">
                      <div className="amen-img2">
                        <img src={amen4} alt="" />
                      </div>
                      <p>Food</p>
                    </div>
                    <div className="amen-detail">
                      <div className="amen-img1">
                        <img src={amen5} alt="" />
                      </div>
                      <p>Wine Bar</p>
                    </div>
                  </div>
                </div>
                <div className="flight-about ">
                  <h5>About</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>


            <div className="enquiry">
              <h4>Enquiry Now</h4>
              <form>
                <div className="input2-div">
                  <p>Leaving From</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
                <div className="input2-div">
                  <p>Departing On</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div className="input2-div">
                  <p>Going From</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
                <div className="input2-div">
                  <p>Arriving On</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div className="input2-div">
                  <p>Class</p>
                  <input className="input" type="text" placeholder="Business" />
                </div>
                <div className="submit">
                  <button className="proceed-btn">Submit</button>
                </div>
              </form>

              <div className="detail-checkout-ar">
                <h3>Price</h3>
                <div className="night-discount-ar">
                  <div
                    className="night-ar-div
                "
                  >
                    <p>1 Nights</p>
                    <p>$500</p>
                  </div>
                  <div
                    className="night-ar-div
                "
                  >
                    <p>Discount 20%</p>
                    <p>$200</p>
                  </div>
                </div>
                <div className="total-payment-ar">
                  <div
                    className="night-ar-div
                "
                  >
                    <p>Total payment</p>
                    <p>{flightDetails.total_amount}</p>
                  </div>
                </div>
                <button className="detail-checkout-btn-ar">Check Out</button>
              </div>

              {
                offers && offers.length > 0 ? (
                  offers.map((card, index) => (
                    <div className="enquiry-flight" key={index}>
                      <div className="flight-img">
                        <img src={enquiryplane} alt="" />
                      </div>
                      <div className="enqiury-flight-detail-div">
                        <div className="enquiry-flight-detail">
                          <h6>Return Flight</h6>
                          <p>From</p>
                        </div>
                        <div className="enquiry-flight-detail">
                          <h4>{card.slices[0].origin.city_name} to {card.slices[0].destination.city.name}</h4>
                          <h5>${card.total_amount}</h5>
                        </div>
                        <div className="enquiry-flight-detail">
                          <Link to={`/FlightDetails/${card.id}`}>
                            <button className="flight-view-btn">View</button>
                          </Link>
                          <Link to={`/Booking/${card.id}`}>
                            <button className="flight-view-btn">Book</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  
                  <FlightcardsOther />
                )
              }






              {/* <div className="needhelp">
              <h3>Need Help?.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="enquiry-contact">
                <div className="phone-img">
                  <img src={phone} alt="" />
                </div>
                <h6>+0000 2222 3333</h6>
              </div>
              <div className="enquiry-contact">
                <div className="email-img">
                  <img src={email} alt="" />
                </div>
                <h6>dummy@gmail.com</h6>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails1;
