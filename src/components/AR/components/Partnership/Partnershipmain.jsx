import React, {useState} from "react";


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { saveVendorPartnerShip } from '../../../../Redux/Features/VendorSlice';


const Partnershipmain = () => {


    
const dispatch = useDispatch();
const { loading, error } = useSelector((state) => state.vendorinfo);  // Access loading and error states



const [formData, setFormData] = useState({

  companyEmail: '',
  yourEmail: '',
  designation: '',
  fullName: '',
  companyName: '',
  telegramID: '',
  tokenNamenetworkName: '',
  coinMarketCapURL: '',
  tokenContractAddress: '',
  tokenListingFee: '',
  sendCopy: false,
  
});




 // Handle input change
 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  });
};


  const handleSubmitpartner = (e) => {
    e.preventDefault();
  
    // Validation: Check for empty required fields
    const requiredFields = [
      { name: 'companyEmail', label: 'Company Email' },
      { name: 'yourEmail', label: 'Your Email' },
      { name: 'designation', label: 'Designation' },
      { name: 'fullName', label: 'Full Name' },
      { name: 'companyName', label: 'Company Name' },
      { name: 'telegramID', label: 'Telegram ID' },
      { name: 'tokenNamenetworkName', label: 'Token Name/Network Name' },
      { name: 'coinMarketCapURL', label: 'CoinMarketCap URL' },
      { name: 'tokenContractAddress', label: 'Token Contract Address' },
      { name: 'tokenListingFee', label: 'Token Listing Fee' },
    ];
  
    // Check for missing fields
    for (let field of requiredFields) {
      if (!formData[field.name]) {
        toast.error(`${field.label} is missing`);
        return; // Stop form submission if a field is missing
      }
    }
  
    // If validation passes, dispatch the data
    dispatch(saveVendorPartnerShip(formData));
  
    // Show success or error toast based on the loading and error states
    if (loading) {
      toast.info('Saving...');
    } else if (error) {
      toast.error('Error saving vendor information');
    } else {
      toast.success('Vendor information saved successfully!');
    }
  };
  





  return (
    <div className="ar-partner-section">
      <div className="container">
        <div className="ar-main-partner">
          <div className="basic-info-section-ar">
            <form onSubmit={handleSubmitpartner}>
              <h3>Partnership</h3>
              <p className="please-find">
                Please fill out the form below so that we may have a discussion
                about collaborating with your project.
              </p>

              <div className="ar-group1">
                <div className="label-input">
                  <label>Company Email*</label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="label-input">
                  <label>Your Email*</label>
                  <input
                    type="email"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="your-desig">
                <h6>Your designation with the company*</h6>
                <div className="ar-checkbox-channel">
                  <div className="checkbox-input-ar-yes-no">
                    <label>
                      <input
                        type="radio"
                        name="designation"
                        value="CEO"
                        checked={formData.designation === 'CEO'}
                        onChange={handleChange}
                      /> CEO
                    </label>
                  </div>
                  <div className="checkbox-input-ar-yes-no">
                    <label>
                      <input
                        type="radio"
                        name="designation"
                        value="Marketing Officer"
                        checked={formData.designation === 'Marketing Officer'}
                        onChange={handleChange}
                      /> Marketing Officer
                    </label>
                  </div>
                  <div className="checkbox-input-ar-yes-no">
                    <label>
                      <input
                        type="radio"
                        name="designation"
                        value="Other"
                        checked={formData.designation === 'Other'}
                        onChange={handleChange}
                      /> Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="ar-group1">
                <div className="label-input">
                  <label>Please provide your full name.*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="label-input">
                  <label>Please provide the name of your Company*</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ar-group1">
                <div className="label-input">
                  <label>Your Telegram ID*</label>
                  <input
                    type="text"
                    name="telegramID"
                    value={formData.telegramID}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="label-input">
                  <label>Please provide the name of your Token and Network*</label>
                  <input
                    type="text"
                    name="tokenNamenetworkName"
                    value={formData.tokenNamenetworkName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ar-group1">
                <div className="label-input">
                  <label>Please provide the CoinMarketCap URL</label>
                  <input
                    type="text"
                    name="coinMarketCapURL"
                    value={formData.coinMarketCapURL}
                    onChange={handleChange}
                  />
                </div>

                <div className="label-input">
                  <label>Token Contract Address</label>
                  <input
                    type="text"
                    name="tokenContractAddress"
                    value={formData.tokenContractAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h6>Are you ready to provide token listing fee/marketing budget?*</h6>
              <div className="ar-checkbox-channel">
                <div className="checkbox-input-ar-yes-no">
                  <label>
                    <input
                      type="radio"
                      name="tokenListingFee"
                      value="Yes"
                      checked={formData.tokenListingFee === 'Yes'}
                      onChange={handleChange}
                    /> Yes
                  </label>
                </div>
                <div className="checkbox-input-ar-yes-no">
                  <label>
                    <input
                      type="radio"
                      name="tokenListingFee"
                      value="No"
                      checked={formData.tokenListingFee === 'No'}
                      onChange={handleChange}
                    /> No
                  </label>
                </div>
                <div className="checkbox-input-ar-yes-no">
                  <label>
                    <input
                      type="radio"
                      name="tokenListingFee"
                      value="Maybe"
                      checked={formData.tokenListingFee === 'Maybe'}
                      onChange={handleChange}
                    /> Maybe
                  </label>
                </div>
              </div>

              <div className="send-me-response">
                <div className="checkbox-input-ar-yes-no">
                  <label>
                    <input
                      type="checkbox"
                      name="sendCopy"
                      checked={formData.sendCopy}
                      onChange={handleChange}
                    /> Send me a copy of my responses.
                  </label>
                </div>
              </div>

              <div className="save-btn-ar">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Partnershipmain;
