import React, {useState} from "react";
import Steps from "../components/MultiSteps/Steps";
import Footer from "../../../mocks/Footer";
import ProfileStep from "../components/MultiSteps/ProfileStep";
import Headerfrom from "../../../mocks/Headerfrom";
import DashboardHeader from "../../SidebarHeading/DashboardHeader";

const Profile = () => {
  const [profileUpdated, setProfileUpdated] = useState(false);

  // Callback function to trigger profile update
  const handleProfileUpdate = () => {
      setProfileUpdated(!profileUpdated); // Toggle to force re-fetch in Header
  };
  
  return (
    <>
      {/* <Headerfrom/> */}
      <DashboardHeader   onProfileUpdate={profileUpdated} />
      <ProfileStep onProfileUpdate = {handleProfileUpdate} />
      <Footer />
    </>
  );
};

export default Profile;
