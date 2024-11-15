import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const BasicInfo1 = ({ formData, setFormData }) => {
  const [imagesPreview, setImagesPreview] = useState({
    input1: null,
    input2: null,
    input3: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (e, inputName) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const uploadedImageUrl = await cloudinaryUpload(file);

        const localPreviewUrl = URL.createObjectURL(file);

        setImagesPreview((prev) => ({
          ...prev,
          [inputName]: localPreviewUrl,
        }));

        setFormData((prev) => ({
          ...prev,
          Basicifo_Pictures: [...prev.Basicifo_Pictures, uploadedImageUrl],
        }));
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };

  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Basic Info</h2>
        <div className="ar-group1">
          <div className="label-input">
            <label>Hotel Name*</label>
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Hotel Address:</label>
            <input
              type="text"
              name="propertyFormerName"
              value={formData.propertyFormerName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="ar-group1">
        
        <div className="label-input">
            <label>Hotel Type</label>
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
            />
          </div>
          <div className="label-input">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Zip/Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="label-input">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input">
            <label>Check-in</label>
            <input
              type="datetime-local"
              name="checkinTime"
              value={formData.checkinTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="label-input">
            <label>Check-out</label>
            <input
              type="datetime-local"
              name="checkoutTime"
              value={formData.checkoutTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          {/* <div className="label-input half-width-input">
            <label>Hotel Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
        

          </div> */}
          <div className="label-input-textarea">
            <label>Hotel Description</label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="ar-group1">
          <div className="label-input image-upload">
            <label>Images</label>
            <div className="images-input-ar">
              {/* First file input */}
              {!imagesPreview.input1 ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "input1")}
                />
              ) : (
                <img
                  src={imagesPreview.input1}
                  alt="Preview 1"
                  className="preview_img-ar-onfill"
                />
              )}

              {/* Second file input */}
              {!imagesPreview.input2 ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "input2")}
                />
              ) : (
                <img
                  src={imagesPreview.input2}
                  alt="Preview 2"
                  className="preview_img-ar-onfill"
                />
              )}

              {/* Third file input */}
              {!imagesPreview.input3 ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "input3")}
                />
              ) : (
                <img
                  src={imagesPreview.input3}
                  alt="Preview 3"
                  className="preview_img-ar-onfill"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo1;
