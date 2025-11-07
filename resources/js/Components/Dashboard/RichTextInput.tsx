import { useEffect, useRef, useState } from "react";
import CustomizedCkEditor from "./CustomizedCkEditor";

const RichTextInput = ({
  name,
  value,
  onChange,
  file,
}: {
  name: string;
  value: string;
  onChange;
  file: string;
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [richTextValue, setRichTextValue] = useState(value);

  const handleChange = (_event: any, editor: any) => {
    const data = editor.getData();
    setRichTextValue(data);
    onChange(data);
  };

  return (
    <div>
      <CustomizedCkEditor
        onChange={handleChange}
        onUploadComplete={() => setIsUploading(false)}
        onUploadStart={() => setIsUploading(true)}
        setIsUploading={setIsUploading}
        value={richTextValue}
      />
      <textarea
        data-file={file}
        hidden
        name={name as string}
        value={richTextValue}
      />
      {isUploading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 text-orange backdrop-blur-md text-3xl flexCenter z-50">
          Uploading File...
        </div>
      )}
    </div>
  );
};

export default RichTextInput;
