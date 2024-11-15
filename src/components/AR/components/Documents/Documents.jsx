import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const Documents = ({ formData, setFormData }) => {
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
          uploadDocuments: uploadedImageUrl,
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
        <h2>Documents</h2>
        <div className="ar-group1">
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

          <div className="label-input">
            <label>Document Title</label>
            <input
              type="text"
              name="documentTitle"
              value={formData.documentTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input half-width-input">
            <label>Description of Document</label>
            <input
              type="text"
              name="documentDescription"
              value={formData.documentDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Documents;
