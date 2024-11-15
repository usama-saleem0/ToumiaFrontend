// import React, { useState } from "react";
// import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

// const LegalInfo = ({formData, setFormData }) => {

//   const [isImagedisplay, setImagedisplay] = useState('');

//   const handleCallbackResume = (imageUrl) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       legalDocuments: imageUrl // Set the image URL here
//     }));
//   };

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = async (e, inputName) => {
//     const file = e.target.files[0];

//     if (file) {
//       try {

//         const uploadedImageUrl = await cloudinaryUpload(file);

//         const localPreviewUrl = URL.createObjectURL(file);

//         setImagesPreview((prev) => ({
//           ...prev,
//           [inputName]: localPreviewUrl,
//         }));

//         setFormData((prev) => ({
//           ...prev,
//           Photos_Pictures: [...prev.Photos_Pictures, uploadedImageUrl],
//         }));
//       } catch (error) {
//         console.error("Error uploading the image:", error);
//       }
//     }
//   };

//   return (
//     <div className="basic-info-section-ar">
//       <form>
//         <h2>Legal Info</h2>
//         <div className="ar-group1">
//           <div className="label-input">
//             <label>Terms and Conditions</label>
//             <input
//               type="text"
//               name="termsAndConditions"
//               value={formData.termsAndConditions}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="label-input">
//             <label>Privacy Policy</label>
//             <input
//               type="text"
//               name="privacyPolicy"
//               value={formData.privacyPolicy}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className="ar-group1">
//           <div className="label-input">
//             <label>Hotel License Number</label>
//             <input
//               type="text"
//               name="hotelLicenseNumber"
//               value={formData.hotelLicenseNumber}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="label-input">
//             <label>Upload Legal Documents</label>
//             {/* <input
//               type="text"
//               name="legalDocuments"
//               value={formData.legalDocuments}
//               onChange={handleInputChange}
//             /> */}

//             <cloudinaryUpload
//               isImagedisplay={isImagedisplay}
//               cloudName={handleCallbackResume}
//               number={"1"} />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LegalInfo;

import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const LegalInfo = ({ formData, setFormData }) => {
  const [isImagedisplay, setImagedisplay] = useState("");
  const [imagePreview, setImagePreview] = useState(""); // For image preview

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change for cloudinary upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Upload image to Cloudinary
        const uploadedImageUrl = await cloudinaryUpload(file);

        // Set image preview (local)
        const localPreviewUrl = URL.createObjectURL(file);
        setImagePreview(localPreviewUrl);

        // Update formData with the Cloudinary URL
        setFormData((prevData) => ({
          ...prevData,
          legalDocuments: uploadedImageUrl,
        }));

        setImagedisplay(localPreviewUrl); // Display preview after upload
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };

  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Legal Info</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Terms and Conditions</label>
            <input
              type="text"
              name="termsAndConditions"
              value={formData.termsAndConditions}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Privacy Policy</label>
            <input
              type="text"
              name="privacyPolicy"
              value={formData.privacyPolicy}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input">
            <label>Hotel License Number</label>
            <input
              type="text"
              name="hotelLicenseNumber"
              value={formData.hotelLicenseNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Upload Legal Documents</label>
            <div className={`${imagePreview ? "flex-image-input" : ""}`}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={
                  imagePreview ? "decreaseinput" : "full-width-input-of-input"
                }
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
        </div>
      </form>
    </div>
  );
};

export default LegalInfo;
