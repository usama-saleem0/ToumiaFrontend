import React, { useState , useEffect } from "react";
import BasicInfo1 from "../BasicInfo1/BasicInfo1";
import Contacts from "../Contacts/Contacts";
import Facilities from "../Facilities/Facilities";
import Rooms from "../Rooms/Rooms";
import RatePlans from "../RatePlans/RatePlans";
import Photos from "../Photos/Photos";
import Policies from "../Policies/Policies";
import TaxSetting from "../TaxSetting/TaxSetting";
import BankDetails from "../BankDetails/BankDetails";
import LegalInfo from "../LegalInfo/LegalInfo";
import Documents from "../Documents/Documents";
import Contract from "../Contract/Contract";
import BasicInfo from "../BasicInfo/BasicInfo";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { saveVendorPropertyaccess } from "../../../../Redux/Features/VendorSlice";

const MainStep = () => {
  const dispatch = useDispatch();
  const { loading, error , success , user  } = useSelector((state) => state.vendorinfo);
  // const storedUser = useSelector((state) => state.vendorinfo.user); 
  const storedUser = useSelector((state) => state.vendorinfo.user);





  const [formData, setFormData] = useState({
    userId: user._id,
    propertyName: "",
    propertyFormerName: "",
    starRating: "",
    builtYear: "",
    propertyType: "",
    chainName: "",
    checkinTime: "",
    checkoutTime: "",
    numOfRestaurants: "",
    currency: "USD", // Default value
    numOfFloors: "",
    timezone: "",
    channelManager: "", // This will hold 'yes' or 'no'
    description: "",
    streetAddress: "",
    area: "",
    country: "",
    city: "",
    locality: "",
    postalCode: "",
    latitude: "-8.728699711955779",
    longitude: "115.18795522652151",

   
  });

  
  const handleSubmitall = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
    };
    
    const requiredFields = [
      { name: 'propertyName', label: 'Property Name' },
      { name: 'propertyFormerName', label: 'Property Former Name' },
      { name: 'starRating', label: 'Star Rating' },
      { name: 'builtYear', label: 'Built Year' },
      { name: 'propertyType', label: 'Property Type' },
      { name: 'chainName', label: 'Chain Name' },
      { name: 'checkinTime', label: 'Check-in Time' },
      { name: 'checkoutTime', label: 'Check-out Time' },
      { name: 'numOfRestaurants', label: 'Number of Restaurants' },
      { name: 'numOfFloors', label: 'Number of Floors' },
      { name: 'timezone', label: 'Timezone' },
      { name: 'channelManager', label: 'Channel Manager' },
      { name: 'streetAddress', label: 'Street Address' },
      { name: 'area', label: 'Area' },
      { name: 'country', label: 'Country' },
      { name: 'city', label: 'City' },
      { name: 'locality', label: 'Locality' },
      { name: 'postalCode', label: 'Postal Code' },
      { name: 'latitude', label: 'latitude' },
      { name: 'longitude', label: 'longitude' },
      // Add any other required fields as needed
    ];
  
    // Check for missing fields
    for (let field of requiredFields) {
      if (!formData[field.name]) {
        toast.error(`${field.label} is missing`);
        return; // Stop form submission if a field is missing
      }
    }
    // dispatch(saveVendorPropertyaccess(formData));
    dispatch(saveVendorPropertyaccess(dataToSubmit));
  };

  useEffect(() => {
    if (loading) {
      toast.info("Saving...");
    } else if (error) {
      toast.error("Error saving vendor information");
    } else if (success) {
      toast.success("Vendor information saved successfully!");
    }
  }, [loading, error, success]); 

  
  const handleChannelManagerChange = (e) => {
    setFormData({
      ...formData,
      channelManager: e.target.value,
    });
  };

  return (
    <div className="ar-steps-section">
      <div className="container">
        <BasicInfo
          formData={formData}
          setFormData={setFormData}
          handleChannelManagerChange={handleChannelManagerChange}
          handleSubmitall=  {handleSubmitall}
        />
    
      </div>
    </div>
  );
};

export default MainStep;
