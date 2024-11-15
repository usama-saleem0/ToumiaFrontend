import React, { useState } from "react";

const Policies = ({formData, setFormData }) => {

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
        <h2>Policies</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Check-in Policy </label>
            <input
              type="text"
              name="checkInPolicy"
              value={formData.checkInPolicy}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Check-out Policy</label>
            <input
              type="text"
              name="checkOutPolicy"
              value={formData.checkOutPolicy}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Pet Policy</label>
            <input
              type="text"
              name="petPolicy"
              value={formData.petPolicy}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Smoking Policy</label>
            <input
              type="text"
              name="smokingPolicy"
              value={formData.smokingPolicy}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Parking Policy</label>
            <input
              type="text"
              name="parkingPolicy"
              value={formData.parkingPolicy}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Cancellation Policy </label>
            <input
              type="text"
              name="cancellationPolicyPolicies"
              value={formData.cancellationPolicyPolicies}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Policies;
