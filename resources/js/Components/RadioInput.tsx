export default function RadioInput({
  type = "radio",
  choices,
  className = "",
  isFocused = false,
  ...props
}) {
  return (
    <div className="flex items-center gap-6">
      {choices.map((choice) => {
        return (
          <div className="flex items-center gap-1 text-orange text-base accent-orange">
            <input
              {...props}
              type={type}
              className={"bg-orange text-orange border-orange" + className}
              value={choice}
            />
            <span>{choice}</span>
          </div>
        );
      })}
    </div>
  );
}
