export default function InputLabel({
  value = "",
  className = "",
  children = null,
  ...props
}) {
  return (
    <label
      {...props}
      className={`block mb-1 opacity-70 font-medium text-white` + className}
    >
      {value ? value : children}
    </label>
  );
}
