import React from "react";

const ProfileSettingsButtons = ({ onSaveChanges, onCancelEdit }) => {
  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        className="bg-blue-400 text-white px-4 py-2 rounded-md mr-2"
        onClick={onSaveChanges}
      >
        Зберегти
      </button>
      <button
        type="button"
        className="bg-gray-400 text-white px-4 py-2 rounded-md"
        onClick={onCancelEdit}
      >
        Відхилити
      </button>
    </div>
  );
};

export default ProfileSettingsButtons;
