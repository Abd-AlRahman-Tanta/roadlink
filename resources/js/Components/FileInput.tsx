export default function FileInput({
  type = "file",
  className = "",
  isFocused = false,
  ...props
}) {
  return (
    <input
      {...props}
      type={type}
      className={
        "p-2 rounded-md bg-none border-2 text-white w-full max-w-sm  border-orange shadow-sm" +
        className
      }
    />
  );
}
