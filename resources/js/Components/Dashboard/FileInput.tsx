import { useState, useRef, useEffect, SyntheticEvent } from "react";
import { uploadFile } from "@/Utils/FileUtils";

interface FileInputProps {
  value?: string; // existing file URL
  onChange?: (url: string) => void;
  file: string;
  name: string;
}

const FileInput: React.FC<FileInputProps> = ({
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

  const handleFileChange = async (e: SyntheticEvent) => {
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
      {preview && (
        <a href={preview} className="underline">
          Current File
        </a>
      )}
      <input
        type="file"
        accept=""
        ref={fileRef}
        onChange={handleFileChange}
        className="block"
      />
      <input data-file={file} hidden name={name} value={preview || ""} />
    </div>
  );
};

export default FileInput;
