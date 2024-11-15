import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const Contract = ({ formData, setFormData }) => {
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
          uploadContract: uploadedImageUrl,
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
        <h2>Contract</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Contract Type</label>
            <input
              type="text"
              name="contractType"
              value={formData.contractType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Contract Terms</label>
            <input
              type="text"
              name="contractTerms"
              value={formData.contractTerms}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Contract Start Date</label>
            <input
              type="date"
              name="contractStartDate"
              value={formData.contractStartDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Contract End Date</label>
            <input
              type="date"
              name="contractEndDate"
              value={formData.contractEndDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input half-width-input ">
            <label>Upload Legal Documents</label>
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
        </div>
      </form>
    </div>
  );
};

export default Contract;
