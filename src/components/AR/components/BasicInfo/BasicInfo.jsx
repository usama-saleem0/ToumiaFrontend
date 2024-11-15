import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { saveVendorInfo } from "../../../../Redux/Features/VendorSlice";
import map from "../../../../assets/multistep/map.png";

const BasicInfo = ({
  formData,
  setFormData,
  handleChannelManagerChange,
  handleSubmitall,
}) => {
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="basic-info-section-ar">
      <div className="basic-information-upper-padding">
        <form>
          <h2 style={{ paddingTop: "0px" }}>Basic Information</h2>

          <div className="ar-group1">
            <div className="label-input">
              <label>Property Name*</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Property Former Name:</label>
              <input
                type="text"
                name="propertyFormerName"
                value={formData.propertyFormerName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>Star Rating*</label>
              <input
                type="text"
                name="starRating"
                value={formData.starRating}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Built Year:</label>
              <input
                type="number"
                name="builtYear"
                value={formData.builtYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>Property Type*</label>
              <input
                type="text"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Chain Name:</label>
              <input
                type="text"
                name="chainName"
                value={formData.chainName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>Checkin Time*</label>
              <input
                type="datetime-local"
                name="checkinTime"
                value={formData.checkinTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Checkout Time*</label>
              <input
                type="datetime-local"
                name="checkoutTime"
                value={formData.checkoutTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>No. of Restaurants:</label>
              <input
                type="Number"
                name="numOfRestaurants"
                value={formData.numOfRestaurants}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Currency*</label>
              <input
                type="text"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                placeholder="USD"
                required
              />
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>No. of Floors:</label>
              <input
                type="number"
                name="numOfFloors"
                value={formData.numOfFloors}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Timezone:</label>
              <input
                type="text"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <h6>Does the property use any channel manager?</h6>
          <div className="ar-checkbox-channel">
            <div className="checkbox-input-ar-yes-no">
              <label>
                <input
                  type="radio"
                  name="channelManager"
                  value="yes"
                  checked={formData.channelManager === "yes"}
                  onChange={handleChannelManagerChange}
                />{" "}
                yes
              </label>
            </div>
            <div className="checkbox-input-ar-yes-no">
              <label>
                <input
                  type="radio"
                  name="channelManager"
                  value="no"
                  checked={formData.channelManager === "no"}
                  onChange={handleChannelManagerChange}
                />{" "}
                no
              </label>
            </div>
          </div>
          <div className="ar-group1">
            <div style={{ width: "100%" }} className="label-input-textarea">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <h2 className="map-heading-ar">Property Address</h2>
          <div className="ar-group1">
            <div className="label-input-column">
              <div className="label-input">
                <label>Street Address*</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label-input label-input-city-ar">
                <label>Area*</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="label-input-column">
              <div className="label-input">
                <label>Country*</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label-input label-input-city-ar">
                <label>City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="ar-group1">
            <div className="label-input">
              <label>Locality*</label>
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Pin/Zip/Postal Code:</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h2 className="map-heading-ar">Map</h2>
          <div className="ar-group1">
            <div className="label-input">
              <label>Latitude:</label>
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                required
              />
            </div>

            <div className="label-input">
              <label>Longitude:</label>
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="map-basicinfo-ar">
            <img src={map} alt="" />
          </div>

          <div className="btns">
            <button className="btn" onClick={handleSubmitall}>
              Save
            </button>
          </div>
        </form>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default BasicInfo;
