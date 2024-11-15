import React, { useState } from "react";

const TaxSetting = ({formData, setFormData }) => {


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
        <h2>Tax Setting</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Tax Percentage </label>
            <input
              type="text"
              name="taxPercentage"
              value={formData.taxPercentage}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Tax Type</label>
            <input
              type="text"
              name="taxType"
              value={formData.taxType}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>City Tax</label>
            <input
              type="text"
              name="cityTax"
              value={formData.cityTax}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Other Taxes</label>
            <input
              type="text"
              name="otherTaxes"
              value={formData.otherTaxes}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaxSetting;
