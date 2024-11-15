import React from "react";
import hotel from "../../assets/Images/hotel.png";
import amen1 from "../../assets/Images/amen1.png";
import amen2 from "../../assets/Images/amen2.png";
import amen3 from "../../assets/Images/amen3.png";
import amen4 from "../../assets/Images/amen4.png";
import amen5 from "../../assets/Images/amen5.png";
import amen6 from "../../assets/Images/amen6.png";
import amen7 from "../../assets/Images/amen7.png";
import enquiryplane from "../../assets/Images/enquiryplane.png";
import phone from "../../assets/Images/phone.png";
import email from "../../assets/Images/email .png";

const HotelDetails1 = () => {
  return (
    <div className="flight-section">
      <div className="container">
        <div className="flight-outer-section">
          <div className="main-flight">
            <div className="flight-detail-col">
              <div className="flight-detail-div">
                <div className="flight-img">
                  <img src={hotel} alt="" />
                </div>
                <div className="flight-details">
                  <h5>Costa Brava</h5>
                  <h6>$600</h6>
                </div>
                <p>Paris</p>
                <div className="overview">
                  <div className="overview-col">
                    <h2>Overview</h2>
                    <div className="key-value">
                      <div className="key">
                        <p>Hotel type:</p>
                      </div>
                      <div className="key">
                        <p>4 star</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Extra People:</p>
                      </div>
                      <div className="key">
                        <p>No Charge</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Minimum Stay:</p>
                      </div>
                      <div className="key">
                        <p>2 Nights</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Security Deposit:</p>
                      </div>
                      <div className="key">
                        <p>$279</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>Country:</p>
                      </div>
                      <div className="key">
                        <p>France</p>
                      </div>
                    </div>
                    <div className="key-value">
                      <div className="key">
                        <p>City:</p>
                      </div>
                      <div className="key">
                        <p>Paris</p>
                      </div>
                    </div>
                  </div>
                  <div className="amenities-col">
                    <h2>Amenities</h2>
                    <div className="amen-detail">
                      <div className="amen-img1">
                        <img src={amen1} alt="" />
                      </div>
                      <p>Wi-fi</p>
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
                      <div className="amen-img2">
                        <img src={amen5} alt="" />
                      </div>
                      <p>Air Conditioning</p>
                    </div>
                    <div className="amen-detail">
                      <div className="amen-img1">
                        <img src={amen6} alt="" />
                      </div>
                      <p>Fitness Facility</p>
                    </div>
                    <div className="amen-detail">
                      <div className="amen-img2">
                        <img src={amen7} alt="" />
                      </div>
                      <p>Swimming pool</p>
                    </div>
                  </div>
                </div>
                <div className="flight-about">
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
                  <input className="input" type="date" />
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
                  <input className="input" type="date" />
                </div>
                <div className="input2-div">
                  <p>Class</p>
                  <select className="input">
                    <option value="business">Business</option>
                    <option value="economy">Economy</option>
                    <option value="first">First Class</option>
                  </select>
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
                    <p>$300</p>
                  </div>
                </div>
                <button className="detail-checkout-btn-ar">Check Out</button>
              </div>
              <div className="enquiry-flight">
                <div className="flight-img">
                  <img src={enquiryplane} alt="" />
                </div>
                <div className="enqiury-flight-detail-div">
                  <div className="enquiry-flight-detail">
                    <h6>Return Flight</h6>
                    <p>From</p>
                  </div>
                  <div className="enquiry-flight-detail">
                    <h4>London to Paris</h4>
                    <h5>$600</h5>
                  </div>
                  <div className="enquiry-flight-detail">
                    <button className="flight-view-btn">View</button>
                    <button className="flight-view-btn">Book</button>
                  </div>
                </div>
              </div>
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

export default HotelDetails1;
