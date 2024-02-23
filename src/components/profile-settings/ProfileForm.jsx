import React from "react";
import EditableField from "./EditableField";
import profileFields from "./profileFields.json";

const ProfileForm = ({ profileData, onProfileUpdate, isEditing }) => {
  return (
    <form>
      {profileFields.map((field) => (
        <EditableField
          key={field.key}
          label={field.label}
          value={profileData[field.key]}
          onChange={(value) => onProfileUpdate(field.key, value)}
          readOnly={!isEditing}
          placeholder={field.placeholder}
          isTextarea={field.isTextarea}
        />
      ))}
    </form>
  );
};

export default ProfileForm;
