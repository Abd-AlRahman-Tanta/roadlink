import React, { useState, useRef, useEffect } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { uploadFile } from "@/Utils/FileUtils";

interface ImageInputProps {
  value?: string; // existing image URL
  onChange?: (url: string) => void;
  file: string;
  name: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  value,
  onChange,
  file,
  name,
}) => {
  const [preview, setPreview] = useState<string | null>(value || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreview(value || null);
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setIsUploading(true);
    if (!file) return;

    const uploadedUrl = await uploadFile(file);
    setIsUploading(false);

    if (uploadedUrl) {
      setPreview(uploadedUrl);
      if (onChange) onChange(uploadedUrl);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        className={`w-32 h-32 border border-gray-300 rounded flex items-center justify-center cursor-pointer overflow-hidden ${
          isUploading ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={() => fileRef.current?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        ) : (
          <ImageIcon fontSize="large" className="text-gray-400" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleFileChange}
        className="block"
      />
      <input data-file={file} hidden name={name} value={preview || ""} />
    </div>
  );
};

export default ImageInput;
