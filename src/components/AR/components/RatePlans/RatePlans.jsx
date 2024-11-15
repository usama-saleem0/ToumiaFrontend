import React, { useState } from "react";


const RatePlans = ({ formData, setFormData }) => {


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Rate Plans</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Rate Plan Name </label>
            <input
              type="text"
              name="ratePlanName"
              value={formData.ratePlanName}
              onChange={handleInputChange}
              required

            />
          </div>

          <div className="label-input">
            <label>Price</label>
            <input
              type="text"
              name="rateprice"
              value={formData.rateprice}
              onChange={handleInputChange}
              required

            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Meal Plan</label>
            <input
              type="text"
              name="mealPlan"
              value={formData.mealPlan}
              onChange={handleInputChange}
              required

            />
          </div>

          <div className="label-input">
            <label>Cancellation Policy</label>
            <input
              type="text"
              name="cancellationPolicy"
              value={formData.cancellationPolicy}
              onChange={handleInputChange}
              required

            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Discounts or Special Offers</label>
            <input
              type="text"
              name="discountsOrOffers"
              value={formData.discountsOrOffers}
              onChange={handleInputChange}
              required

            />
          </div>

          <div className="label-input">
            <label>Bed Type</label>
            <select
              className="form-select form-select-lg mb-3"
              name="ratebedType"  // Unique name for bed type
              value={formData.ratebedType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Bed Type</option>
              <option value="Large">Large</option>
              <option value="Master">Master</option>
              <option value="Small">Small</option>
            </select>
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input half-width-input">
            <label>Security Deposit</label>
            <input
              type="text"
              name="ratepricePerNight"
              value={formData.ratepricePerNight}
              onChange={handleInputChange}
              required

            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input-textarea">
            <label>Description</label>
            <textarea
              type="text"
              name="ratedescription"
              value={formData.ratedescription}
              onChange={handleInputChange}
              required

            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RatePlans;
