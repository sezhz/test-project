import React from "react";

const EditableField = ({
  label,
  value,
  onChange,
  readOnly,
  placeholder,
  isTextarea,
}) => {
  const inputElement = isTextarea ? (
    <textarea
      placeholder={placeholder}
      className="mt-1 p-2 w-full border rounded-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
    ></textarea>
  ) : (
    <input
      placeholder={placeholder}
      type="text"
      className="mt-1 p-2 w-full border rounded-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
    ></input>
  );

  return (
    <div className="mb-4 w-full sm:w-full">
      <label className="block text-sm font-medium text-gray-700">
        {label}:
      </label>
      {inputElement}
    </div>
  );
};

export default EditableField;
