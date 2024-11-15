import React, { useState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useDispatch, useSelector } from "react-redux";
import { saveVendorPorpertyinfo } from "../../../../Redux/Features/VendorSlice";

const PropertyInfomain = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.vendorinfo);

  const [formData, setFormData] = useState({
    PropertyName: "",
    PropertyType: "",
    PhoneNumber: "",
    AloneProperty: "",
    FirstName: "",
    LastName: "",
    RoleProperty: "",
    MobileNumber: "",
    countryCode: "",
    Country: "",
    City: "",
    Email: "",
    Password: "",
    subscribeEmail: false,
    agreeTermsUser: false,
    agreeTermsVendor: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmitpartner = (e) => {
  //   e.preventDefault();
  //   dispatch(saveVendorPorpertyinfo(formData));
  // };

  const handleSubmitpartner = (e) => {
    e.preventDefault();

    // Validation: Check for empty required fields
    const requiredFields = [
      { name: "PropertyName", label: "Property Name" },
      { name: "PropertyType", label: "Property Type" },
      { name: "PhoneNumber", label: "Phone Number" },
      { name: "FirstName", label: "First Name" },
      { name: "LastName", label: "Last Name" },
      { name: "RoleProperty", label: "Role Property" },
      { name: "MobileNumber", label: "Mobile Number" },
      { name: "Country", label: "Country" },
      { name: "City", label: "City" },
      { name: "Email", label: "Email" },
      { name: "Password", label: "Password" },
      { name: "agreeTermsUser", label: " terms and Conditions as a User" },
      { name: "agreeTermsVendor", label: "terms and Conditions as a Vendor." },
    ];

    // Check for missing fields
    for (let field of requiredFields) {
      if (!formData[field.name]) {
        toast.error(`${field.label} is missing`);
        return; // Stop form submission if a field is missing
      }
    }

    // If validation passes, dispatch the data
    dispatch(saveVendorPorpertyinfo(formData));
  };

  useEffect(() => {
    if (loading) {
      toast.info("Saving...");
    } else if (error) {
      toast.error("Error saving Property information");
    } else if (success) {
      toast.success("Property information saved successfully!");
    }
  }, [loading, error, success]);

  const handleChannelManagerChange = (e) => {
    setFormData({
      ...formData,
      AloneProperty: e.target.value,
    });
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      MobileNumber: value,
      countryCode: countryData.dialCode, // Store the selected country code
    });
  };

  return (
    <div className="ar-partner-section">
      <div className="container">
        <div className="ar-main-partner">
          <div className="basic-info-section-ar">
            <form>
              <h3 style={{ paddingBottom: "24px" }}>Property Info</h3>
              <div className="ar-group1">
                <div className="label-input">
                  {" "}
                  <label>Property Name</label>
                  <input
                    type="text"
                    name="PropertyName"
                    value={formData.PropertyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="label-input">
                  <label>Property Type</label>
                  <input
                    type="text"
                    name="PropertyType"
                    value={formData.PropertyType}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="ar-group1">
                <div className="label-input half-width-input">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="your-desig">
                <h6>Stand Alone Property?</h6>
                <div className="ar-checkbox-channel">
                  <div className="checkbox-input-ar-yes-no">
                    <label>
                      <input
                        type="radio"
                        name="AloneProperty"
                        value="yes"
                        checked={formData.AloneProperty === "yes"}
                        onChange={handleChannelManagerChange}
                      />{" "}
                      yes
                    </label>
                  </div>
                  <div className="checkbox-input-ar-yes-no">
                    <label>
                      <input
                        type="radio"
                        name="AloneProperty"
                        value="no"
                        checked={formData.AloneProperty === "no"}
                        onChange={handleChannelManagerChange}
                      />{" "}
                      no
                    </label>
                  </div>
                </div>
              </div>

              <h3 style={{ paddingBottom: "14px", paddingTop: "29px" }}>
                User Info
              </h3>

              <div className="ar-group1">
                <div className="label-input">
                  {" "}
                  <label>First Name</label>
                  <input
                    type="text"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="label-input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="ar-group1">
                <div className="label-input">
                  {" "}
                  <label>Role in Property</label>
                  <input
                    type="text"
                    name="RoleProperty"
                    value={formData.RoleProperty}
                    onChange={handleChange}
                  />
                </div>
                {/* 
                <div className="label-input">
                  <label>Mobile Number with Country Code</label>
                  <div className="verficication-code-div ">
                    <div style={{ paddingTop: "0px" }} className="ar-group4">
                      <div className="label-input country-code-input">
                        <input type="text" />
                      </div>
                    </div>
                    <div style={{ paddingTop: "0px" }} className="ar-group3">
                      <div className="label-input verification-code-input mobile-number-div">
                        <input type="number"
                          name="MobileNumber"
                          value={formData.MobileNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="label-input">
                  <label>Mobile Number with Country Code</label>
                  <div className="verficication-code-div ">
                    <div style={{ paddingTop: "0px" }} className="ar-group4">
                      <div className="label-input verification-code-input mobile-number-div">
                        <PhoneInput
                          country={"us"} // Default country
                          value={formData.MobileNumber}
                          onChange={handlePhoneChange} // This updates the mobile number and country code
                          enableAreaCodes={true}
                          countryCodeEditable={false}
                          disableDropdown={false} // Allows selection of country code
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ar-group1">
                <div className="label-input">
                  {" "}
                  <label>Country</label>
                  <input
                    type="text"
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                  />
                </div>

                <div className="label-input">
                  <label>City</label>
                  <input
                    type="text"
                    name="City"
                    value={formData.City}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="ar-group1">
                <div className="label-input">
                  {" "}
                  <label>Email</label>
                  <input
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>

                <div className="label-input">
                  <label>Password</label>
                  <input
                    type="text"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ar-checkbox-channel">
                <div className="checkbox-input-ar-yes-no agree-checkbox-small-screen">
                  <label>
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribeEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subscribeEmail: e.target.checked,
                        })
                      }
                    />{" "}
                    Yes, I Want to Subscribe to Email
                  </label>
                </div>
              </div>
              <div className="ar-checkbox-channel">
                <div className="checkbox-input-ar-yes-no agree-checkbox-small-screen">
                  <label>
                    <input
                      type="checkbox"
                      name="terms_user"
                      checked={formData.agreeTermsUser}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeTermsUser: e.target.checked,
                        })
                      }
                    />{" "}
                    I Agree to terms and Conditions as a User. Learn more
                  </label>
                </div>
              </div>
              <div className="ar-checkbox-channel">
                <div className="checkbox-input-ar-yes-no agree-checkbox-small-screen">
                  <label>
                    <input
                      type="checkbox"
                      name="terms_vendor"
                      checked={formData.agreeTermsVendor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeTermsVendor: e.target.checked,
                        })
                      }
                    />{" "}
                    I Agree to terms and Conditions as a Vendor. Read terms &
                    Conditions
                  </label>
                </div>
              </div>

              <div className=" submit-btn" onClick={handleSubmitpartner}>
                <button>Submit Details</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfomain;
