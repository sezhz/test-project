import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faUnlink } from "@fortawesome/free-solid-svg-icons";

const AccountField = ({
  label,
  value,
  onUpdate,
  onDisconnect,
  isEditing,
  onToggleEdit,
  isFilled,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDisconnect = () => {
    setShowConfirmation(true);
  };

  const confirmDisconnect = () => {
    if (window.confirm(`Ви впевнені, що хочете від'єднати ${label}?`)) {
      onDisconnect();
      onUpdate("");
      onToggleEdit();
      setShowConfirmation(false);
    }
  };

  return (
    <div className="mb-4 w-full sm:w-3/4">
      <label className="block text-sm font-medium text-gray-700">
        {label}:
      </label>
      <div className="flex items-center">
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={value}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder={`Підключити ${label}`}
          disabled={!isEditing}
        />
        {!isEditing ? (
          <div className="flex ml-2 space-x-2">
            <button
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md"
              onClick={onToggleEdit}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="text-xs bg-gray-500 text-white px-2 py-1 rounded-md"
              onClick={handleDisconnect}
            >
              <FontAwesomeIcon icon={faUnlink} />
            </button>
          </div>
        ) : (
          <button
            className="text-xs bg-green-500 text-white px-2 py-1 rounded-md ml-1"
            onClick={() => {
              onUpdate(value);
              onToggleEdit();
            }}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        )}
      </div>
      {showConfirmation && confirmDisconnect()}
    </div>
  );
};

export default AccountField;
