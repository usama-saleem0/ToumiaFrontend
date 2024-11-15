import React, { useState } from "react";

const BankDetails = ({formData, setFormData }) => {
  

  // Handle input change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };


  const [errors, setErrors] = useState({
    accountNumber: "",
    swiftCode: "",
    taxID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input fields
    validateField(name, value);
  };


  const validateField = (name, value) => {
    let error = "";

    // Account Number/IBAN Validation (example regex for IBAN)
    if (name === "accountNumber") {
      const accountNumberRegex = /^[A-Z0-9]{15,34}$/; // Example IBAN regex
      if (!accountNumberRegex.test(value)) {
        error = "Invalid IBAN. The correct format is alphanumeric, 15-34 characters.";
      }
    }

    // SWIFT/BIC Code Validation (SWIFT is 8 or 11 alphanumeric characters)
    if (name === "swiftCode") {
      const swiftCodeRegex = /^[A-Z0-9]{8,11}$/; // Example SWIFT regex
      if (!swiftCodeRegex.test(value)) {
        error = "Invalid SWIFT/BIC Code. It should be 8-11 alphanumeric characters.";
      }
    }

    // Tax ID/VAT Number Validation (you can use a specific regex for your tax ID format)
    if (name === "taxID") {
      const taxIDRegex = /^[A-Z0-9]{9,12}$/; // Example VAT/Tax ID regex
      if (!taxIDRegex.test(value)) {
        error = "Invalid Tax ID. It should be 9-12 alphanumeric characters.";
      }
    }

    // Update error state
    setErrors({ ...errors, [name]: error });
  };
  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Bank Details</h2>

        
        <div className="ar-group1">
          <div className="label-input">
            <label>Account Holder Name</label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
            />
          </div>
        </div>


        <div className="ar-group1">
          <div className="label-input">
            <label>Account Number/IBAN</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
            />
              {errors.accountNumber && <p style={{ color: "red" }}>{errors.accountNumber}</p>}
          </div>

          <div className="label-input">
            <label>SWIFT/BIC Code</label>
            <input
              type="text"
              name="swiftCode"
              value={formData.swiftCode}
              onChange={handleInputChange}
            />
             {errors.swiftCode && <p style={{ color: "red" }}>{errors.swiftCode}</p>}
          </div>
        </div>


        <div className="ar-group1">
          <div className="label-input">
            <label>Bank Address</label>
            <input
              type="text"
              name="bankAddress"
              value={formData.bankAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Tax ID/VAT Number</label>
            <input
              type="text"
              name="taxID"
              value={formData.taxID}
              onChange={handleInputChange}
            />
             {errors.taxID && <p style={{ color: "red" }}>{errors.taxID}</p>}
          </div>
        </div>


      </form>
    </div>
  );
};

export default BankDetails;
