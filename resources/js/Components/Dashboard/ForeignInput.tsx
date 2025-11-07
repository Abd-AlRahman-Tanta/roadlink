const ForeignInput = ({
  value,
  foreignArray: foreignArrayString,
  file,
  name,
  onChange,
}) => {
  const foreignArray: { id: string; name: string }[] = JSON.parse(
    foreignArrayString || "[]"
  );
  const selectedId = value || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    if (onChange) onChange(newId);
  };

  return (
    <select
      className="w-full p-2 border border-gray-300 rounded-md"
      defaultValue={selectedId}
      data-file={file}
      name={name}
      onChange={handleChange}
    >
      {foreignArray.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default ForeignInput;
