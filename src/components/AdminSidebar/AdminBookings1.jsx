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
import { Link } from "react-router-dom";

const AdminBookings1 = () => {
  const plotData = [
    {
      id: 1,
      size: "240 Sq.yd Villa Required",
      img: plot,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam",
      postedTime: "2:49am,Thursday",
    },
    {
      id: 2,
      size: "240 Sq.yd Villa Required",
      img: plot,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam",
      postedTime: "2:49am,Thursday",
    },
    {
      id: 3,
      size: "240 Sq.yd Villa Required",
      img: plot,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam",
      postedTime: "2:49am,Thursday",
    },
    {
      id: 4,
      size: "240 Sq.yd Villa Required",
      img: plot,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam",
      postedTime: "2:49am,Thursday",
    },
    {
      id: 5,
      size: "240 Sq.yd Villa Required",
      img: plot,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam",
      postedTime: "2:49am,Thursday",
    },
  ];

  return (
    <section className="customer-details-section">
      <div className="main-customer">
        <Heading heading={"Bookings"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="card-dash-box dash-box-padding">
            <div className="dash-card-1">
              <span>
                <p>Total Hotels</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="26"
                  viewBox="0 0 6 26"
                  fill="none"
                >
                  <circle cx="3" cy="3" r="3" fill="white" />
                  <circle cx="3" cy="13" r="3" fill="white" />
                  <circle cx="3" cy="23" r="3" fill="white" />
                </svg>
              </span>

              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <img src={booking} alt="" />
                </div>
                <h3>102</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <span>
                <p>Booking Hotels</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="26"
                  viewBox="0 0 6 26"
                  fill="none"
                >
                  <circle cx="3" cy="3" r="3" fill="white" />
                  <circle cx="3" cy="13" r="3" fill="white" />
                  <circle cx="3" cy="23" r="3" fill="white" />
                </svg>
              </span>

              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <img src={booking} alt="" />
                </div>
                <h3>102</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <span>
                <p>Sales</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="26"
                  viewBox="0 0 6 26"
                  fill="none"
                >
                  <circle cx="3" cy="3" r="3" fill="white" />
                  <circle cx="3" cy="13" r="3" fill="white" />
                  <circle cx="3" cy="23" r="3" fill="white" />
                </svg>
              </span>

              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <img src={confrim} alt="" />
                </div>
                <h3>102</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <span>
                <p>Past Bookings</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="26"
                  viewBox="0 0 6 26"
                  fill="none"
                >
                  <circle cx="3" cy="3" r="3" fill="white" />
                  <circle cx="3" cy="13" r="3" fill="white" />
                  <circle cx="3" cy="23" r="3" fill="white" />
                </svg>
              </span>

              <div className="flex-box-icon">
                <div
                  className="dash-card-1-icon"
                  style={{ paddingTop: "10px" }}
                >
                  <img src={cancellled} alt="" />
                </div>
                <h3>102</h3>
              </div>
            </div>
          </div>
          <div className="booking-detail-main-ar-outer">
            <div className="booking-detail-ar">
              {plotData.map((plot, index) => (
                <Link
                  to="/Admin_dashboard/AdminBookings1inner"
                  className="none-list"
                  // onClick={() => handleChangeIndex(0)}
                >
                  <div key={plot.id} className="plot-detail-inner">
                    <div className="plot-detail-das-ar">
                      <div className="plot-detail-left-ar">
                        <div className="plot-img-ar">
                          <img src={plot.img} alt="" />
                        </div>
                        <div>
                          <h5>{plot.size}</h5>
                          <h6>{plot.description}</h6>
                        </div>
                      </div>
                      <div className="plot-detail-right-ar">
                        <p>Posted: {plot.postedTime}</p>
                        <div className="plot-like-img-ar">
                          <img src={like} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBookings1;
