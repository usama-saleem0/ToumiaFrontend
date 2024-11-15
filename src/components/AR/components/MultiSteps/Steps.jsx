// import React, { useState } from "react";
// import BasicInfo1 from "../BasicInfo1/BasicInfo1";
// import Contacts from "../Contacts/Contacts";
// import Facilities from "../Facilities/Facilities";
// import Rooms from "../Rooms/Rooms";
// import RatePlans from "../RatePlans/RatePlans";
// import Photos from "../Photos/Photos";
// import Policies from "../Policies/Policies";
// import TaxSetting from "../TaxSetting/TaxSetting";
// import BankDetails from "../BankDetails/BankDetails";
// import LegalInfo from "../LegalInfo/LegalInfo";
// import Documents from "../Documents/Documents";
// import Contract from "../Contract/Contract";

// const Steps = () => {
//   const [step, setStep] = useState(0);
//   const totalSteps = [
//     "Basic Info",
//     "Contacts",
//     "Amenities/Facilities",
//     "Room",
//     "Rate Plans",
//     "Photos",
//     "Policies",
//     "Tax Setting",
//     "Bank Details",
//     "Legal Info",
//     "Document",
//     "Contract",
//   ];

//   const steps = [
//     <BasicInfo1 />,
//     <Contacts />,
//     <Facilities />,
//     <Rooms />,
//     <RatePlans />,
//     <Photos />,
//     <Policies />,
//     <TaxSetting />,
//     <BankDetails />,
//     <LegalInfo />,
//     <Documents />,
//     <Contract />,
//   ];

//   const handleNext = () => {
//     if (step < totalSteps.length - 1) setStep(step + 1);
//   };

//   const handlePrev = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted");
//   };

//   const goToStep = (index) => {
//     setStep(index);
//   };

//   return (
//     <div className="ar-steps-section">
//       <div className="container">
//         <div className="ar-main-steps">
//           <div className="progress_container">
//             {totalSteps.map((title, index) => (
//               <div key={index} className="step">
//                 <div
//                   className={`circle ${step >= index ? "active" : ""}`}
//                   onClick={() => goToStep(index)}
//                 ></div>
//                 <p className="step-title">{title}</p>
//               </div>
//             ))}
//           </div>

//           <div className="step-content">{steps[step]}</div>

//           <div className="btns">
//             <button
//               className={`${step <= 0 ? "btn-prev disabled" : "btn-prev"}`}
//               onClick={handlePrev}
//               disabled={step <= 0}
//             >
//               Prev
//             </button>

//             {step < totalSteps.length - 1 ? (
//               <button
//                 className={`${
//                   step >= totalSteps.length - 1 ? "disabled" : "btn"
//                 }`}
//                 onClick={handleNext}
//               >
//                 Next
//               </button>
//             ) : (
//               <button className="btn" onClick={handleSubmit}>
//                 Submit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Steps;

import React, { useState } from "react";
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
import controlimg from "../../../../assets/control/controlimg.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { saveVendorInfo } from "../../../../Redux/Features/VendorSlice";
import Heading from "../../../SidebarHeading/Heading";

const Steps = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.vendorinfo); // Access loading and error states

  const [formData, setFormData] = useState({
    // starRating: '',
    // builtYear: '',
    // propertyType: '',
    // chainName: '',
    // numOfRestaurants: '',
    // currency: 'USD', // Default value
    // numOfFloors: '',
    // timezone: '',
    // channelManager: '', // This will hold 'yes' or 'no'
    // streetAddress: '',
    // latitude: '',
    // longitude: '',

    propertyName: "",
    propertyFormerName: "",
    city: "",
    State_Province: "",
    postalCode: "",
    country: "",
    checkinTime: "",
    checkoutTime: "",
    description: "",
    Basicifo_Pictures: "",
    locality: "",
    
    primaryContactName: "",
    emailAddress: "",
    phoneNumber: "",
    secondaryContactName: "",
    secondaryContactEmail: "",
    emergencyContactInfo: "",

    amenities: "",
    Tour_Pictures: "",

    Roomtype: "",
    Roomsrequired: "",
    RoomDescription: "",
    MaximumOccupancy: "",
    RoomSize: "",
    BedType: "",
    nightprice: "",
    Room_Pictures: "",

    ratePlanName: "",
    rateprice: "",
    mealPlan: "",
    cancellationPolicy: "",
    discountsOrOffers: "",
    ratebedType: "",
    ratepricePerNight: "",
    ratedescription: "",

    Photos_Pictures: "",

    checkInPolicy: "",
    checkOutPolicy: "",
    petPolicy: "",
    smokingPolicy: "",
    parkingPolicy: "",
    cancellationPolicyPolicies: "",

    taxPercentage: "",
    taxType: "",
    cityTax: "",
    otherTaxes: "",

    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    swiftCode: "",
    bankAddress: "",
    taxID: "",

    termsAndConditions: "",
    privacyPolicy: "",
    hotelLicenseNumber: "",
    legalDocuments: "",

    uploadDocuments: "",
    documentTitle: "",
    documentDescription: "",

    contractType: "",
    contractTerms: "",
    contractStartDate: "",
    contractEndDate: "",
    uploadContract: "",
  });

  const handleSubmitall = (e) => {
    e.preventDefault();
    dispatch(saveVendorInfo(formData));
    // Show success or error toast based on the loading and error states
    if (loading) {
      toast.info("Saving...");
    } else if (error) {
      toast.error("Error saving vendor information");
    } else {
      toast.success("Vendor information saved successfully!");
    }
  };

  const [step, setStep] = useState(0);
  const totalSteps = [
    "Basic Info",
    "Contacts",
    "Amenities/Facilities",
    "Room",
    "Rate Plans",
    "Photos",
    "Policies",
    "Tax Setting",
    "Bank Details",
    "Legal Info",
    "Document",
    "Contract",
  ];

  const steps = [
    <BasicInfo1 formData={formData} setFormData={setFormData} />,
    <Contacts formData={formData} setFormData={setFormData} />,
    <Facilities formData={formData} setFormData={setFormData} />,
    <Rooms formData={formData} setFormData={setFormData} />,
    <RatePlans formData={formData} setFormData={setFormData} />,
    <Photos formData={formData} setFormData={setFormData} />,
    <Policies formData={formData} setFormData={setFormData} />,
    <TaxSetting formData={formData} setFormData={setFormData} />,
    <BankDetails formData={formData} setFormData={setFormData} />,
    <LegalInfo formData={formData} setFormData={setFormData} />,
    <Documents formData={formData} setFormData={setFormData} />,
    <Contract formData={formData} setFormData={setFormData} />,
  ];

  
  const handleNext = () => {
    let isValid = true;
    
    
    switch (step) {
      case 0: // Step 1: Basic Info
        const { propertyName, propertyFormerName,locality, city , postalCode,   country, checkinTime, checkoutTime,  description, Basicifo_Pictures } = formData;
        if (
          !propertyName || !propertyFormerName || !city ||
          !postalCode || !country || !checkinTime || !checkoutTime || !description ||
          !Basicifo_Pictures || !locality
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Basic Info.");
        }
        break;
      
      case 1: // Step 2: Contacts
        const { primaryContactName, emailAddress, phoneNumber, secondaryContactName, secondaryContactEmail, emergencyContactInfo } = formData;
        if (
          !primaryContactName || !emailAddress || !phoneNumber || 
          !secondaryContactName || !secondaryContactEmail || !emergencyContactInfo
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Contacts.");
        }
        break;
        
      case 2: // Step 3: Facilities
        const { amenities, Tour_Pictures } = formData;
        if (!amenities || !Tour_Pictures) {
          isValid = false;
          toast.error("Please fill out all fields in Facilities.");
        }
        break;
  
      case 3: // Step 4: Rooms
        const { Roomtype, Roomsrequired, RoomDescription, MaximumOccupancy, RoomSize, BedType, nightprice, Room_Pictures } = formData;
        if (
          !Roomtype || !Roomsrequired || !RoomDescription || 
          !MaximumOccupancy || !RoomSize || !BedType || !nightprice || !Room_Pictures
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Rooms.");
        }
        break;
  
      case 4: // Step 5: Rate Plans
        const { ratePlanName, rateprice, mealPlan, cancellationPolicy, discountsOrOffers, ratebedType, ratepricePerNight, ratedescription } = formData;
        if (
          !ratePlanName || !rateprice || !mealPlan || !cancellationPolicy || 
          !discountsOrOffers || !ratebedType || !ratepricePerNight || !ratedescription
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Rate Plans.");
        }
        break;
  
      case 5: // Step 6: Photos
        const { Photos_Pictures } = formData;
        if (!Photos_Pictures) {
          isValid = false;
          toast.error("Please upload pictures in Photos section.");
        }
        break;
  
      case 6: // Step 7: Policies
        const { checkInPolicy, checkOutPolicy, petPolicy, smokingPolicy, parkingPolicy, cancellationPolicyPolicies } = formData;
        if (
          !checkInPolicy || !checkOutPolicy || !petPolicy || 
          !smokingPolicy || !parkingPolicy || !cancellationPolicyPolicies
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Policies.");
        }
        break;
  
      case 7: // Step 8: Tax Settings
        const { taxPercentage, taxType, cityTax, otherTaxes } = formData;
        if (!taxPercentage || !taxType || !cityTax || !otherTaxes) {
          isValid = false;
          toast.error("Please fill out all fields in Tax Settings.");
        }
        break;
  
      case 8: // Step 9: Bank Details
        const { accountHolderName, bankName, accountNumber, swiftCode, bankAddress, taxID } = formData;
        if (
          !accountHolderName || !bankName || !accountNumber || 
          !swiftCode || !bankAddress || !taxID
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Bank Details.");
        }
        break;
  
      case 9: // Step 10: Legal Info
        const { termsAndConditions, privacyPolicy, hotelLicenseNumber, legalDocuments } = formData;
        if (
          !termsAndConditions || !privacyPolicy || !hotelLicenseNumber || 
          !legalDocuments
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Legal Info.");
        }
        break;
  
      case 10: // Step 11: Documents
        const { uploadDocuments, documentTitle, documentDescription } = formData;
        if (!uploadDocuments || !documentTitle || !documentDescription) {
          isValid = false;
          toast.error("Please fill out all fields in Documents.");
        }
        break;
  
      case 11: // Step 12: Contract
        const { contractType, contractTerms, contractStartDate, contractEndDate, uploadContract } = formData;
        if (
          !contractType || !contractTerms || !contractStartDate || 
          !contractEndDate || !uploadContract
        ) {
          isValid = false;
          toast.error("Please fill out all fields in Contract.");
        }
        break;
  
      default:
        break;
    }
  
    // If all validations pass, move to the next step
    if (isValid) {
      setStep(step + 1);
    }
  };
  

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  const goToStep = (index) => {
    setStep(index);
  };

  // const handleNext = () => {
  //   const isFormValid = Object.values(formData).every((value) => value !== '' && value !== null && value !== undefined);

  //   if (isFormValid) {
  //     if (step < totalSteps.length - 1) setStep(step + 1); // Move to next step if form is valid
  //   } else {
  //     toast.error("Please fill in all required fields before proceeding.");
  //   }
  // };

  // const handlePrev = () => {
  //   if (step > 0) setStep(step - 1);
  // };

  // const handleSubmit = () => {
  //   console.log("Form submitted");
  // };

  // const goToStep = (index) => {
  //   setStep(index);
  // };

  return (
    <section className="AddTour-section">
      <div className="main-customer">
        <Heading heading={"Add Property"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          {" "}
          <div className="ar-steps-section">
            <div className="container">
              <div className="ar-main-steps">
                <div className="progress_container">
                  {totalSteps.map((title, index) => (
                    <div key={index} className="step">
                      <div
                        className={`circle ${step >= index ? "active" : ""}`}
                        onClick={() => step >= index && goToStep(index)}
                      ></div>
                      <p className="step-title">{title}</p>
                    </div>
                  ))}
                </div>

                <div className="step-content">{steps[step]}</div>

                <div className="btns">
                  <button
                    className={`${
                      step <= 0 ? "btn-prev disabled" : "btn-prev"
                    }`}
                    onClick={handlePrev}
                    disabled={step <= 0}
                  >
                    Prev
                  </button>

                  {step < totalSteps.length - 1 ? (
                    <button
                      className={`${
                        step >= totalSteps.length - 1 ? "disabled" : "btn"
                      }`}
                      onClick={handleNext} // Validation logic inside handleNext
                    >
                      Next
                    </button>
                  ) : (
                    <button className="btn" onClick={handleSubmitall}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
