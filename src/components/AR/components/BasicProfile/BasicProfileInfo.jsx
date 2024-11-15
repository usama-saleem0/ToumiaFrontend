import React, { useState } from "react";
import profiledummy from "../../../../assets/multistep/profiledummy.png";
import { baseurl } from "../../../../BaseUrl";
import axios from "axios";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const BasicProfileInfo = ({ profileData, setProfileData, handleUpdateProfile }) => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const [isImagedisplay, setImagedisplay] = useState("");
  const [imagePreview, setImagePreview] = useState(""); // For image preview

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Upload image to Cloudinary
        const uploadedImageUrl = await cloudinaryUpload(file);

        // Set image preview (local)
        const localPreviewUrl = URL.createObjectURL(file);
        setImagePreview(localPreviewUrl);

        // Update profileData with the Cloudinary URL
        setProfileData((prevData) => ({
          ...prevData,
          ProfileImage: uploadedImageUrl,
        }));

        setImagedisplay(localPreviewUrl); // Display preview after upload
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };



  return (
    <div className="basic-info-section-ar ">
      <form onSubmit={handleUpdateProfile}>
        <h2>Basic Profile</h2>

        <div className="dummy-profile-ar">
          {/* Check if ProfileImage exists, and display it */}
          {profileData.ProfileImage && !imagePreview && (
            <img
              src={profileData.ProfileImage}
              alt="Stored Profile"
              className="preview-img-input-ar"
            />
          )}

          <div className={`${imagePreview ? "flex-image-input" : ""}`}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={imagePreview ? "decreaseinput" : "full-width-input-of-input"}
            />
            {/* Display the preview */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="preview-img-input-ar"
              />
            )}
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input">
            {" "}
            <label>First Name</label>
            <input type="text"
              name="FirstName"
              value={profileData.FirstName}
              onChange={handleChange}
            />
          </div>

          <div className="label-input">
            <label>Last Name</label>
            <input type="text"
              name="LastName"
              value={profileData.LastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="gender-checboxes-ar-div">
          <p>Gender :</p>
          <div className="ar-checkbox-channel">

            <div className="checkbox-input-ar-yes-no">
              <label>
                <input
                  type="radio"
                  name="Gender"
                  value="Mr"
                  checked={profileData.Gender === "Mr"}
                  onChange={handleChange}
                />
                Mr
              </label>
            </div>
            <div className="checkbox-input-ar-yes-no">
              <label>
                <input
                  type="radio"
                  name="Gender"
                  value="Mrs"
                  checked={profileData.Gender === "Mrs"}
                  onChange={handleChange}
                />
                Mrs
              </label>
            </div>
            <div className="checkbox-input-ar-yes-no">
              <label>
                <input
                  type="radio"
                  name="Gender"
                  value="Miss"
                  checked={profileData.Gender === "Miss"}
                  onChange={handleChange}
                />
                Miss
              </label>
            </div>

          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input">
            {" "}
            <label>Date of Birth:</label>
            <input type="date"
              name="DOB"
              value={profileData.DOB}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            {" "}
            <label>User Name</label>
            <input type="text"
              name="Username"
              value={profileData.Username}
              onChange={handleChange}
            />
          </div>

          <div className="label-input">
            <label>Email</label>
            <input type="text"
              name="Email"
              value={profileData.Email}
              onChange={handleChange}
            />
          </div>
        </div>

        <h2 style={{ paddingTop: "40px" }}>Address</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Address Line 1</label>
            <input type="text"
              name="AddressLine1"
              value={profileData.AddressLine1}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Address Line 2</label>
            <input type="text"
              name="AddressLine2"
              value={profileData.AddressLine2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>City</label>
            <input type="text"
              name="City"
              value={profileData.City}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>ZIP/Postal Code</label>
            <input type="text"
              name="PostalCode"
              value={profileData.PostalCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            {" "}
            <label>State/Province/Region</label>
            <input type="text"
              name="Province"
              value={profileData.Province}
              onChange={handleChange}
            />
          </div>

          <div className="label-input">
            <label>Country</label>
            <input type="text"
              name="Country"
              value={profileData.Country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="save-btn-ar">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default BasicProfileInfo;
