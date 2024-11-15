import React from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import customerimg from "../../assets/customer/customerimg.png";
import edit from "../../assets/customer/edit.png";
import deleteimg from "../../assets/customer/delete.png";
import confrim from "../../assets/dashboard/confirmed.png";
import booking from "../../assets/dashboard/booking.png";
import cancellled from "../../assets/dashboard/cancelled.png";
import like from "../../assets/dashboard/like.png";
import plot from "../../assets/dashboard/plot.png";

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
import bokingdetail from "../../assets/dashboard/bokingdetail.png";

const AdminBookings1inner = () => {
  // const customerData = [
  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },

  //   {
  //     Date: "Date",
  //     name: "Marco Polious",
  //     Seats: "4 adults",
  //     Checki: "26.12.24",
  //     Checko: "28.12.24",
  //     Location: "Paris",
  //     Total: "$245.00",
  //     day: "thu",
  //     time: "12:00",
  //   },
  // ];
  return (
    <section className="customer-details-section">
      <div className="main-customer">
        <Heading heading={"Bookings"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="admin-dash-booking-deatil-ar">
            <div className="flight-section" style={{ paddingTop: "0px" }}>
              <div className="container">
                <div className="main-flight mf-ar">
                  <div className="flight-detail-col">
                    <div className="flight-detail-div fdd2-ar">
                      <div className="flight-img">
                        <img src={hotel} alt="" />
                      </div>
                      <div className="flight-details fd2-ar">
                        <h5>Costa Brava</h5>
                        <h6>$600</h6>
                      </div>
                      <p>Paris</p>
                      <div className="overview">
                        <div className="overview-col oc2-ar">
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
                        <div className="amenities-col ac2-ar ">
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
                      <div className="flight-about fah5-ar">
                        <h5>About</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="enquiry">
                    <div className="outer-enquiry">
                      <h4>Other Hotels</h4>
                      <div className="booking-detail-box-ar">
                        {" "}
                        <div className="booking-detail-side-div">
                          <div className="booking-img-right-ar">
                            <img src={bokingdetail} alt="" />
                          </div>
                          <div>
                            <h5>240 Sq.yd Villa Required</h5>
                            <h6>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h6>
                            <button className="view-btn-ar">View</button>
                          </div>
                        </div>
                      </div>
                      <div className="booking-detail-box-ar">
                        {" "}
                        <div className="booking-detail-side-div">
                          <div className="booking-img-right-ar">
                            <img src={bokingdetail} alt="" />
                          </div>
                          <div>
                            <h5>240 Sq.yd Villa Required</h5>
                            <h6>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h6>
                            <button className="view-btn-ar">View</button>
                          </div>
                        </div>
                      </div>
                      <div className="booking-detail-box-ar">
                        {" "}
                        <div className="booking-detail-side-div">
                          <div className="booking-img-right-ar">
                            <img src={bokingdetail} alt="" />
                          </div>
                          <div>
                            <h5>240 Sq.yd Villa Required</h5>
                            <h6>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h6>
                            <button className="view-btn-ar">View</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBookings1inner;
