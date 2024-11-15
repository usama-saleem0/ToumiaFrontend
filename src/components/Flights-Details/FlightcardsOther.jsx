import React, { useEffect, useState } from 'react';
import enquiryplane from "../../assets/Images/enquiryplane.png";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';
import { postFlightStatic } from '../../Redux/Features/VendorSlice';

const FlightcardsOther = () => {


    const dispatch = useDispatch();
    const { offers, loading, error } = useSelector((state) => state.vendorinfo);

    useEffect(() => {
        dispatch(postFlightStatic());
    }, [dispatch]);



    return (
        <div>


            {offers && offers.length > 0 ? (
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
                                <Link to={`/FlightDetails/${card.id}`}  >
                                    <button className="flight-view-btn">View</button>
                                </Link>


                                <Link to={`/Booking/${card.id}`}  >
                                <button className="flight-view-btn">Book</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <p>No offers available</p> // Message displayed if no offers are available
            )}



        </div>
    )
}

export default FlightcardsOther
