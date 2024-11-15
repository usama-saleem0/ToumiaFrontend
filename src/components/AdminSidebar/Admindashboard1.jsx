import React from "react";
import { Link } from "react-router-dom";
import Heading from "../SidebarHeading/Heading";
import locationImage from "../../assets/Images/Flights.png";
import controlimg from "../../assets/control/controlimg.png";
import RecentActivity from "../RecentActivity/RecentActivity";
import BookingChart from "../Charts/BookingChart";
import { Card } from "react-bootstrap";
import card1 from "../../assets/dashboard/dashboardcard.png";
import Arrow from "../../assets/dashboard/Arrow.png";

const Admindashboard1 = () => {
  const cardData = [
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
    {
      name: "Costa Brava",
      total: "120",
      book: "120",
      location: "Paris",
      rating: "4.5",
      img: card1,
    },
  ];
  return (
    <section className="AddTour-section">
      <div className="main-customer">
        <Heading heading={"Dashboard"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="admin-dash-inner-blow-head">
            <div className="AddTour-main-box">
              <div className="main-Flights1">
                <div className="Flights1-box">
                  {cardData.map((card, index) => (
                    <div className="dashboard-card" key={index}>
                      <div className="dashboard-card-img-div">
                        <div className="dashboard-card-img-ar">
                          <img src={card.img} alt="" />
                        </div>
                        <div>
                          <h5>{card.name}</h5>
                          <h6>{card.location}</h6>
                        </div>
                      </div>
                      <div className="dashboard-card-total-div-ar">
                        <div
                          className="border-right"
                          style={{
                            textAlign: "start",
                            borderLeft: "none",
                            width: "43%",
                          }}
                        >
                          <h4>{card.total}+</h4>
                          <p>Total Hotels</p>
                        </div>
                        <div className="border-right" style={{ width: "43%" }}>
                          <h4>{card.total}+</h4>
                          <p>Book Hotels</p>
                        </div>
                        <div
                          className="border-right"
                          style={{
                            textAlign: "end",
                          }}
                        >
                          <h4>{card.rating}</h4>
                          <p>Rating</p>
                        </div>
                      </div>
                      <div>
                        <button className="view-btn-property-ar">
                          {" "}
                          <p>View</p>
                          <div className="arrow-view-ar">
                            {" "}
                            <img src={Arrow} alt="" />
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admindashboard1;
