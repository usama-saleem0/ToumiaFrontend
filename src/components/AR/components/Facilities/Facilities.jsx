import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const Facilities = ({ formData, setFormData }) => {
  const [imagesPreview, setImagesPreview] = useState({
    input1: null,
    input2: null,
    input3: null,
  });

  const handleInputChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        amenities: [...prev.amenities, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        amenities: prev.amenities.filter((amenity) => amenity !== value),
      }));
    }
  };

  // Handle image file upload
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
          Tour_Pictures: [...prev.Tour_Pictures, uploadedImageUrl],
        }));
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };

  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Amenities/Facilities</h2>
        <div className="amenities-div-ar">
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Free WiFi"
                onChange={handleInputChange}
              />{" "}
              Free WiFi
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Swimming Pool"
                onChange={handleInputChange}
              />{" "}
              Swimming Pool
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Gym/Fitness Center"
                onChange={handleInputChange}
              />{" "}
              Gym/Fitness Center
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Parking"
                onChange={handleInputChange}
              />{" "}
              Parking
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Restaurant/Bar"
                onChange={handleInputChange}
              />{" "}
              Restaurant/Bar
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Pet-friendly"
                onChange={handleInputChange}
              />{" "}
              Pet-friendly
            </label>
          </div>
          <div className="checkbox-input-ar">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Other Amenities"
                onChange={handleInputChange}
              />{" "}
              Other Amenities
            </label>
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

export default Facilities;
