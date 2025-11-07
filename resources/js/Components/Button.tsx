export default function Button({
  className = "",
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `rounded-md font-sans bg-none text-black bg-white border-2 border-white border-opacity-30 px-4 py-2 text-sm font-bold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 active:bg-gray-900 ${disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
