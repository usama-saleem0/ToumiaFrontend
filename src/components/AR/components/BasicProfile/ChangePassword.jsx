import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseurl } from '../../../../BaseUrl';


const ChangePassword = ({ profileData, setProfileData, handleUpdateProfile }) => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      // Check old password before updating
      const passwordResponse = await axios.post(`${baseurl}/verify-password`, { userId: profileData.userId, password: profileData.oldpassword });
      if (!passwordResponse.data.valid) {
          toast.error('Old password is not matched');
          return;
      }

      if (profileData.newpassword !== profileData.confirmPassword) {
          toast.error('New password and confirm password do not match');
          return;
      }

      // Proceed to update the password
      await axios.post(`${baseurl}/update-password`, { userId: profileData.userId, newPassword: profileData.newpassword });
      toast.success('Password updated successfully!');
  } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Error updating password');
  }
};
  return (
    <div className="basic-info-section-ar">
      <form  onSubmit={handleSubmit}>
        <h2>Change Password</h2>

        <div className="ar-group1">
          <div className="label-input">
            <label>Old Password</label>
            <input type="password"
            name="oldpassword"
            value={profileData.oldpassword}
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>New Password</label>
            <input type="password" 
             name="newpassword"
             value={profileData.newpassword}
             onChange={handleChange}
             />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Retype Password</label>
            <input type="password" 
             name="confirmPassword"
             value={profileData.confirmPassword}
             onChange={handleChange}
             />
          </div>
        </div>
        <div className="ar-checkbox-channel">
          <div className="checkbox-input-ar-yes-no">
            <label>
              <input type="checkbox" name="option" value="logout" /> Also Logout
              From Other Devices
            </label>
          </div>
        </div>
        <div className="save-btn-ar">
          <button   type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

