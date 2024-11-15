import React from "react";
import { Link } from "react-router-dom";
import earth from "../../../../assets/multistep/earth.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const MobileVerification = ({ profileData, setProfileData, handleUpdateProfile }) => {



  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Separate handler for PhoneInput
  const handlePhoneChange = (value) => {
    setProfileData((prevData) => ({
      ...prevData,
      MobileNumber: value, // Update MobileNumber directly
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    handleUpdateProfile(); // Call the update function
  };

  return (
    <div className="basic-info-section-ar">
      <form  onSubmit={handleUpdateProfile}>
        <h2>Add a mobile number</h2>
        <div className="verficication-code-div">
          <PhoneInput
            country={'us'} // Default country
            value={profileData.MobileNumber}
            onChange={handlePhoneChange} 
            enableAreaCodes={true}
            countryCodeEditable={false}
            disableDropdown={false} // Allows selection of country code
          />
        </div>

        <Link className="already-acc-p-ar">
          <p>Already have code? Enter Code</p>
        </Link>
        <div className="save-btn-ar">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MobileVerification;

