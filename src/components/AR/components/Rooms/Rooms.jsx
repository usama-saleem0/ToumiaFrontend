import React, { useState } from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";

const Rooms = ({ formData, setFormData }) => {
  const [imagesPreview, setImagesPreview] = useState({
    input1: null,
    input2: null,
    input3: null,
  });

  const handleInputChange = (e) => {
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
          Room_Pictures: [...prev.Room_Pictures, uploadedImageUrl],
        }));
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };

  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Rooms</h2>

        <div className="ar-group1">
          <div className="label-input">
            <label>Room Type</label>
            <select
              className="form-select form-select-lg mb-3"
              name="Roomtype" // Unique name for Room type
              value={formData.Roomtype}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Deluxedouble">Deluxe double room</option>
              <option value="doubleroom">Standard double room</option>
              <option value="Juniorsuite">Junior suite</option>
              <option value="Singleroom">Single room</option>
            </select>
          </div>

          <div className="label-input">
            <label>Number of Rooms Required</label>
            <input
              type="number"
              name="Roomsrequired" // Unique name for rooms required
              value={formData.Roomsrequired}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input">
            <label>Room Description</label>
            <input
              type="text"
              name="RoomDescription" // Unique name for room description
              value={formData.RoomDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className="label-input">
            <label>Maximum Occupancy</label>
            <input
              type="number"
              name="MaximumOccupancy" // Unique name for maximum occupancy
              value={formData.MaximumOccupancy}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input">
            <label>Room Size</label>
            <select
              className="form-select form-select-lg mb-3"
              name="RoomSize" // Unique name for room size
              value={formData.RoomSize}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="250to400sq">250 to 400 square feet</option>
              <option value="400to600sq">400 to 600 square feet</option>
              <option value="600to800sq">600 to 800 square feet</option>
            </select>
          </div>

          <div className="label-input">
            <label>Bed Type</label>
            <select
              className="form-select form-select-lg mb-3"
              name="BedType" // Unique name for bed type
              value={formData.BedType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Bed Type
              </option>
              <option value="Large">Large</option>
              <option value="Master">Master</option>
              <option value="Small">Small</option>
            </select>
          </div>
        </div>

        <div className="ar-group1">
          <div className="label-input half-width-input">
            <label>Price per Night</label>
            <select
              className="form-select form-select-lg mb-3"
              name="nightprice" // Unique name for night price
              value={formData.nightprice}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Price
              </option>
              <option value="4000">$4000 for Single room</option>
              <option value="6000">$6000 for Junior suite</option>
              <option value="10000">$10000 for Standard double room</option>
              <option value="15000">$15000 for Deluxe double room</option>
            </select>
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

export default Rooms;
