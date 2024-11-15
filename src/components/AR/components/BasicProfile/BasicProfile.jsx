import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import BasicProfileInfo from "./BasicProfileInfo";
import ChangePassword from "./ChangePassword";
import MobileVerification from "./MobileVerification";
import { baseurl } from "../../../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const BasicProfile = ({ onProfileUpdate }) => {
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : null;
  };

  const user = getUserFromLocalStorage();

  console.log("User", user);
  if (!user || !user._id) {
    console.error("User ID not found in local storage");
    throw new Error("User ID not found in local storage");
  }
  const [profileData, setProfileData] = useState({
    userId: user._id,
    ProfileImage: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    DOB: "",
    Username: "",
    Email: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    PostalCode: "",
    Province: "",
    Country: "",
    mobilecode: "",
    MobileNumber: "",
    oldpassword: "",
    newpassword: "",
    confirmPassword: "",
  });

  // const fetchProfileData = async () => {
  //     try {

  //         const response = await axios.get(`${baseurl}/Vendor_getProfile/${user._id}`);
  //         setProfileData(response.data);
  //     } catch (error) {
  //         console.error('Error fetching profile data:', error);
  //         toast.error('Error fetching profile data');
  //     }
  // };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/Vendor_getProfile/${user._id}`
      );

      if (response.data && Object.keys(response.data).length === 0) {
        toast.info("Kindly update your profile");
      } else {
        setProfileData(response.data);
      }
    } catch (error) {
      // If an error occurs, show a generic error message
      console.error("Error fetching profile data:", error);
      toast.error("Error fetching profile data");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [user._id]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseurl}/Vendor_createProfile/${user._id}`,
        profileData
      );
      toast.success("Profile updated successfully!");
      setProfileData(response.data); // Optional: Update the state with the response data

      if (onProfileUpdate) {
        onProfileUpdate();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="upper-profile-padding">
      {" "}
      <div className="basicprofile-ar-main-div">
        <ToastContainer position="top-center" />
        <div className="sidebar-profile-ar">
          <h2>Profile</h2>
          <div className="profile-links-ar-div">
            <NavLink
              to="/Multistepmain/profile/basic-info"
              className={({ isActive }) =>
                isActive
                  ? "profile-inner-link-ar profile-link-active"
                  : "profile-inner-link-ar"
              }
            >
              <p>Basic Info</p>
              <p>{">"}</p>
            </NavLink>
            <NavLink
              to="/Multistepmain/profile/change-password"
              className={({ isActive }) =>
                isActive
                  ? "profile-inner-link-ar profile-link-active"
                  : "profile-inner-link-ar"
              }
            >
              <p>Change Password</p>
              <p>{">"}</p>
            </NavLink>
            <NavLink
              to="/Multistepmain/profile/mobile-verification"
              className={({ isActive }) =>
                isActive
                  ? "profile-inner-link-ar profile-link-active"
                  : "profile-inner-link-ar"
              }
              style={{ borderBottom: "none" }}
            >
              <p>Mobile Verification</p>
              <p>{">"}</p>
            </NavLink>
          </div>
        </div>

        <div className="basicprofile-ar-right">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={<Navigate to="/Multistepmain/profile/basic-info" />}
            />

            <Route
              path="basic-info"
              element={
                <BasicProfileInfo
                  profileData={profileData}
                  setProfileData={setProfileData}
                  handleUpdateProfile={handleUpdateProfile}
                />
              }
            />
            <Route
              path="change-password"
              element={
                <ChangePassword
                  profileData={profileData}
                  setProfileData={setProfileData}
                  handleUpdateProfile={handleUpdateProfile}
                />
              }
            />
            <Route
              path="mobile-verification"
              element={
                <MobileVerification
                  profileData={profileData}
                  setProfileData={setProfileData}
                  handleUpdateProfile={handleUpdateProfile}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
