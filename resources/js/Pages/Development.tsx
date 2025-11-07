import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Development = () => {
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);

  const handlePaste = (e) => {
    const clipboardItems = e.clipboardData.items;
    const newImages = [];
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        newImages.push({ file, name: "", preview: URL.createObjectURL(file) });
      }
    }
    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div>
      <div
        ref={containerRef}
        tabIndex={0}
        onPaste={handlePaste}
        onMouseDown={(e) => {
          e.preventDefault();
          containerRef.current.focus();
        }}
        style={{
          border: "2px dashed gray",
          padding: "20px",
          minHeight: "200px",
        }}
      >
        <p>Paste images here from Figma</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        {images.map((img, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <img
              src={img.preview}
              alt=""
              style={{ width: 100, marginRight: 10 }}
            />
            <input
              type="text"
              placeholder="Image name"
              value={img.name}
              onChange={(e) => {
                const updated = [...images];
                updated[index].name = e.target.value;
                setImages(updated);
              }}
            />
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <button
          onClick={async () => {
            const formData = new FormData();
            images.forEach((img, i) => {
              formData.append(`images[${i}][file]`, img.file);
              formData.append(`images[${i}][name]`, img.name);
            });
            await axios.post("/images/upload", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
          }}
        >
          Upload Images
        </button>
      )}
    </div>
  );
};

export default Development;
