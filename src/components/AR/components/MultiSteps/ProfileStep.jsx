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
import BasicProfile from "../BasicProfile/BasicProfile";

const ProfileStep = ({onProfileUpdate}) => {

  return (
    <div className="ar-steps-section">
      <div className="container">
    <BasicProfile onProfileUpdate ={onProfileUpdate}/>,
       
      </div>
    </div>
  );
};

export default ProfileStep;
