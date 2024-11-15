import React, {useState} from "react";
import { cloudinaryUpload } from "../../../../cloudinaryUpload/cloudinaryUpload";


const Photos = ({ formData, setFormData }) => {

  
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
          Photos_Pictures: [...prev.Photos_Pictures, uploadedImageUrl],
        }));
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };



  return (
    <div className="basic-info-section-ar">
      <form>
        <h2>Photos</h2>
        <div className="ar-group1">
          <div className="label-input image-upload">
            <label>Images</label>
            <div className="images-input-ar">
              {/* First file input */}
              {!imagesPreview.input1 ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'input1')}
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
                  onChange={(e) => handleFileChange(e, 'input2')}
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
                  onChange={(e) => handleFileChange(e, 'input3')}
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

export default Photos;
