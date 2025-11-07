import { useState } from "react";

export default function Input({
  type = "text",
  className = "",
  isFocused = false,
  label,
  ...props
}) {
  if (type == "password") {
    const [isVisible, setIsVisible] = useState(false);

    // Password Input
    return (
      <div>
        <label className="text-white mb-1 text-sm block" htmlFor={props.name}>
          {label}
        </label>
        <div className="flex items-center rounded-md border-white border-opacity-10 border-2 pe-2">
          <input
            {...props}
            type={isVisible ? "text" : "password"}
            className={
              "block px-2 py-1 bg-none text-white w-full shadow-sm" + className
            }
          />
          <button
            className="text-lightGray"
            type="button"
            onClick={() => setIsVisible((curr) => !curr)}
          >
            {isVisible ? "Show" : "Hide"}
          </button>
        </div>
      </div>
    );
  }

  // Regular Input
  return (
    <div>
      <label className="text-white mb-1 text-sm block" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        className={
          "block px-2 py-1 rounded-md bg-none border-2 border-white border-opacity-10 text-white w-full shadow-sm" +
          className
        }
      />
    </div>
  );
}
