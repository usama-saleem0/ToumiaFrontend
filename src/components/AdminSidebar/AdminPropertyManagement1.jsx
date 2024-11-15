import React, { useEffect } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import react-tabs CSS
import card1 from "../../assets/dashboard/property.png";
import update from "../../assets/dashboard/update.png";
import name from "../../assets/dashboard/name.png";
import phone from "../../assets/dashboard/phone.png";
import email from "../../assets/dashboard/email.png";
import Arrow from "../../assets/dashboard/Arrow.png";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchVendorProperty } from '../../Redux/Features/VendorSlice';
import Loader from "../../mocks/Loader";

const AdminPropertyManagement1 = () => {


  const dispatch = useDispatch();

  const { vendorDataAll, loading, error } = useSelector((state) => state.vendorinfo);




  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchVendorProperty());
  }, [dispatch]);

  if (loading) {
    // <p>Loading...</p>;
    return(

      <Loader/>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }



  return (
    <section className="AddTour-section">
      <div className="main-customer">
        <Heading heading={"Property Mangement"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="admin-dash-inner-blow-head">
            <div className="AddTour-main-box">
              <div className="main-Flights1">
                <div className="Flights1-box" style={{ gap: "40px 0" }}>
                  {Array.isArray(vendorDataAll) && vendorDataAll.length > 0 ? (
                    vendorDataAll.map((card, index) => (
                      <div className="dashboard2-card" key={index}>
                        <div className="property-img-div">
                          
                          {card.Basicifo_Pictures && card.Basicifo_Pictures[0] ? (
                            <img
                              style={{ width: "100%" }}
                              src={card.Basicifo_Pictures[0]}
                              alt={card.propertyName || "Image"}
                            />
                          ) : (
                            <img style={{ width: "100%" }} src={update} alt="Default Image" />
                          )}
                        </div>

                        <div className="property-card-detail">
                          {/* Show propertyName instead of title */}
                          <h4>{card.propertyName || "No Title"}</h4>
                        </div>

                        <div className="property-detail-div-ar">
                          <div className="property-detail-ar">
                            <div>
                              <img src={name} alt="Name " />
                            </div>
                            {/* Show placeholder if primaryContactName is missing */}
                            <h6>{card.primaryContactName || "No Name Provided"}</h6>
                          </div>

                          <div className="property-detail-ar">
                            <div>
                              <img src={phone} alt="Phone " />
                            </div>
                            {/* Show placeholder if phoneNumber is missing */}
                            <h6>{card.phoneNumber || "No Phone Provided"}</h6>
                          </div>

                          <div className="property-detail-ar">
                            <div>
                              <img src={email} alt="Email " />
                            </div>
                            {/* Show placeholder if emailAddress is missing */}
                            <h6>{card.emailAddress || "No Email Provided"}</h6>
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() => navigate(`/Admin_dashboard/AdminPropertyinner/${card._id}`)}
                            className="view-btn-property-ar"
                          >
                            <p>View</p>
                            <div className="arrow-view-ar">
                              <img src={Arrow} alt="Arrow" />
                            </div>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="dashboard2-card">
                      <h4>No Tour Found</h4>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPropertyManagement1;
