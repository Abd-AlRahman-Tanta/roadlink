export default function Button({
  className = "",
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={` ${disabled && "opacity-25"} ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
