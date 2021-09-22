import React, { useState } from "react";
import "./styles.css";

const AppL = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="AppL">
      <div className="container">
        {error && <p className="errorMsg">File not supported</p>}
        <div
          className="imgPreviewL"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#131313"
          }}
        >
          {!imgPreview && (
            <>
              <label htmlFor="fileUpload" className="customFileUpload">
                Edit
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default AppL;
