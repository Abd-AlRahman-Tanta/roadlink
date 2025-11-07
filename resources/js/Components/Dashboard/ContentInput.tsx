import { useState, useEffect } from "react";
import ImageInput from "./ImageInput";
import FileInput from "./FileInput";
import ForeignInput from "./ForeignInput";
import RichTextInput from "./RichTextInput";

interface ContentInputProps {
  element: HTMLElement;
}

const ContentInput = ({ element }: ContentInputProps) => {
  const type =
    element.getAttribute("data-type") ||
    (() => {
      if (element.tagName === "IMG") return "image";
      if (element.tagName === "A") return "link";
      if (element.dataset.foreignArray) return "foreign";
      return "text";
    })();

  const name = element.getAttribute("data-content") || "";
  const label = element.getAttribute("data-label") || "";
  const file = element.closest("[data-file]")?.getAttribute("data-file") || "";

  const renderInputElement = () => {
    if (type === "richText") {
      return (
        <RichTextInput
          name={name}
          file={file}
          value={element.innerHTML}
          onChange={(value) => (element.innerHTML = value)}
        />
      );
    }

    if (type === "image") {
      return (
        <ImageInput
          value={(element as HTMLImageElement).src}
          file={file}
          name={name}
          onChange={(url) => {
            if (url) {
              (element as HTMLImageElement).src = url;
            }
          }}
        />
      );
    }

    if (type === "file") {
      return (
        <FileInput
          value={(element as HTMLAnchorElement).href}
          file={file}
          name={name}
          onChange={(url) => {
            if (url) {
              (element as HTMLAnchorElement).href = url;
            }
          }}
        />
      );
    }

    if (type === "foreign") {
      return (
        <ForeignInput
          file={file}
          name={name}
          foreignArray={element.dataset.foreignArray}
          value={element.innerText}
          onChange={(id) => {
            if (id) {
              element.textContent = id;
            }
          }}
        />
      );
    }

    return (
      <input
        type="text"
        name={name}
        data-file={file}
        defaultValue={element.innerText}
        onChange={(e) => (element.innerText = e.currentTarget.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    );
  };

  return (
    <div className="block mb-2">
      {label && <span className="block font-medium mb-1">{label}</span>}
      {renderInputElement()}
    </div>
  );
};

export default ContentInput;
