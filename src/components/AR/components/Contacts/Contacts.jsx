import React, { useState } from "react";

const Contacts = ({formData, setFormData}) => {
 
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
        <h2>Contacts</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Primary Contact Name</label>
            <input
              type="text"
              name="primaryContactName"
              value={formData.primaryContactName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Email Address</label>
            <input
              type="text"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Secondary Contact Name</label>
            <input
              type="text"
              name="secondaryContactName"
              value={formData.secondaryContactName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Secondary Contact Email</label>
            <input
              type="text"
              name="secondaryContactEmail"
              value={formData.secondaryContactEmail}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Emergency Contact Information</label>
            <input
              type="text"
              name="emergencyContactInfo"
              value={formData.emergencyContactInfo}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
