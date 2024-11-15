import React, { useEffect } from "react";
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

import propertymanagment from "../../assets/dashboard/propertymanagment.png";
import update from "../../assets/dashboard/update.png";
import name from "../../assets/dashboard/name.png";
import email from "../../assets/dashboard/email.png";
import phone from "../../assets/dashboard/phone.png";
import { useParams } from "react-router-dom";
// import bokingdetail from "../../assets/dashboard/bokingdetail.png";

import { useDispatch, useSelector } from 'react-redux';
import { fetchVendorProperty, fetchVendorPropertyById } from '../../Redux/Features/VendorSlice';
import Loader from "../../mocks/Loader";
import { useNavigate } from "react-router-dom";



const AdminPropertyManagementinner = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { vendorData, vendorDataAll, loading, error } = useSelector((state) => state.vendorinfo);
  const dispatch = useDispatch();

  console.log('Navigating to ID:', id);

  // useEffect(() => {
  //   dispatch(fetchVendorPropertyById(id));  

  // }, [dispatch, id]);


  useEffect(() => {
  
      dispatch(fetchVendorPropertyById(id));  // Fetch vendor data by ID
  
      dispatch(fetchVendorProperty());

  }, [id, dispatch]);



  if (loading) {
    // <p>Loading...</p>;
    return (

      <Loader />
    );
  }

  if (error) {

    return (
      <p>Error: {error}</p>
    );
  }

  return (
    <section className="customer-details-section">
      <div className="main-customer">
        <Heading
          heading={"Tour Details"}
          controlimg={controlimg}
        />
        <div className="top-padding-dash-inner-sec">
          {" "}
          <div className="admin-dash-booking-deatil-ar">
            <div className="flight-section" style={{ paddingTop: "0px" }}>
              <div className="container">
                <div className="main-flight">

                  
                  <div className="flight-detail-col">
                  {vendorData && (
                    
                    <div className="flight-detail-div fdd2-ar">
                      <div className="flight-img">
                        <img src={hotel} alt="" />
                      </div>
                      <div className="flight-details fd2-ar">
                        <h5>{vendorData?.propertyName}</h5>
                        <h6>${vendorData?.rateprice || "600"}</h6>
                      </div>
                      <p>{vendorData?.city || "Paris"}</p>
                      <div className="proprty-mang-card-detail-ar2">
                        <div className="inner-flex">
                          <div>
                            <img src={name} alt="" />
                          </div>
                          <p>{vendorData?.propertyFormerName || "John Smith"}</p>
                        </div>
                        <div className="inner-flex">
                          <div>
                            <img src={phone} alt="" />
                          </div>
                          <p>{vendorData?.phoneNumber || "+000 2222 3333"}</p>
                        </div>
                        <div className="inner-flex">
                          <div>
                            <img src={email} alt="" />
                          </div>
                          <p>{vendorData?.emailAddress || "dummy@gmail.com"}</p>
                        </div>
                      </div>
                      <div className="overview">
                        <div className="overview-col oc2-ar">
                          <h2>Overview</h2>
                          <div className="key-value">
                            <div className="key">
                              <p>Hotel type:</p>
                            </div>
                            <div className="key">
                              <p>{vendorData?.locality || "4 star"}</p>
                            </div>
                          </div>
                          <div className="key-value">
                            <div className="key">
                              <p>Extra People:</p>
                            </div>
                            <div className="key">
                              <p>{vendorData?.MaximumOccupancy || "No Charge"}</p>
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
                              <p>${vendorData?.ratepricePerNight || "279"}</p>
                            </div>
                          </div>
                          <div className="key-value">
                            <div className="key">
                              <p>Country:</p>
                            </div>
                            <div className="key">
                              <p>{vendorData?.country || "France"}</p>
                            </div>
                          </div>
                          <div className="key-value">
                            <div className="key">
                              <p>City:</p>
                            </div>
                            <div className="key">
                              <p>{vendorData?.city || "Paris"}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="amenities-col ac2-ar amenities-col-property-ar">
                          <h2>Amenities</h2>
                          {vendorData.amenities && vendorData.amenities.length > 0 ? (
                            vendorData.amenities.map((amenity, index) => {
                              if (amenity === "Free WiFi") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img1">
                                      <img src={amen1} alt="Wi-fi" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Restaurant/Bar") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img2">
                                      <img src={amen2} alt="Coffee" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Restaurant/Bar") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img2">
                                      <img src={amen3} alt="Drink" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Restaurant/Bar") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img2">
                                      <img src={amen4} alt="Food" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Air Conditioning") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img2">
                                      <img src={amen5} alt="Air Conditioning" />
                                    </div> 
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Gym/Fitness Center") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img1">
                                      <img src={amen6} alt="Fitness Facility" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              } else if (amenity === "Swimming Pool") {
                                return (
                                  <div className="amen-detail" key={index}>
                                    <div className="amen-img2">
                                      <img src={amen7} alt="Swimming Pool" />
                                    </div>
                                    <p>{amenity}</p>
                                  </div>
                                );
                              }

                              // Return null for amenities that you don't want to display
                              return null;
                            })
                          ) : (
                            <p>No amenities available</p> // Optional message if there are no amenities
                          )}
                        </div>

                      </div>
                      <div className="flight-about fah5-ar flight-about-property-ar">
                        <h5>About</h5>
                        <p>
                          {vendorData?.description || (
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
                            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                          )}
                        </p>

                      </div>
                    </div>

                  )}
                  </div>


                  {vendorDataAll && (
                  <div className="enquiry" >
                    <div className="outer-enquiry">
                      <h4>Other Tours</h4>

                      {Array.isArray(vendorDataAll) && vendorDataAll.length > 0 ? (
                    vendorDataAll.map((card, index) => (

                      <div className="booking-detail-box-ar" key={index}>
                        {" "}
                        <div className="booking-detail-side-div">
                          <div className="property-right-side-img-ar">
                          {card.Basicifo_Pictures && card.Basicifo_Pictures[0] ? (
                            <img
                              style={{ width: "100%" }}
                              src={card.Basicifo_Pictures[0]}
                              alt={card.propertyName || "Image"}
                            />
                          ) : (
                            <img style={{ width: "100%" }} src={propertymanagment} alt="Default Image" />
                          )}
                            {/* <img src={propertymanagment} alt="" /> */}
                          </div>
                          <div className="propert-mang-card-title-ar-div">
                            <div className="propert-mang-card-title-ar">
                              {" "}
                              <h3>{card.propertyName ||"Costa Brava"}</h3>
                              {/* <div className="update-large-img-ar">
                              <img src={update} alt="" />
                            </div> */}
                            </div>
                            <div className="desktop-flex">
                              {" "}
                              <div className="property-mang-card-outer-detail">
                                <div className="proprty-mang-card-detail-ar">
                                  <div className="inner-flex">
                                    <div>
                                      <img src={name} alt="" />
                                    </div>
                                    <p>{card.primaryContactName ||"John Smith"}</p>
                                  </div>
                                  <div className="inner-flex">
                                    <div>
                                      <img src={phone} alt="" />
                                    </div>
                                    <p>{card.phoneNumber ||"+000 2222 3333"}</p>
                                  </div>
                                  <div className="inner-flex">
                                    <div>
                                      <img src={email} alt="" />
                                    </div>
                                    <p>{card.emailAddress ||"dummy@gmail.com"}</p>
                                  </div>
                                </div>
                              </div>
                              <button className="view-btn-ar"
                               onClick={() => navigate(`/Admin_dashboard/AdminPropertyinner/${card._id}`)}
                              >View</button>
                            </div>
                          </div>
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

export default AdminPropertyManagementinner;
