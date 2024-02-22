import React from "react";
import EditableField from "./EditableField";

const ProfileForm = ({ profileData, onProfileUpdate, isEditing }) => {
  return (
    <form>
      <EditableField
        label="Ім'я"
        value={profileData.username}
        onChange={(value) => onProfileUpdate("username", value)}
        readOnly={!isEditing}
        placeholder="Вкажіть ваше ім'я *"
      />

      <EditableField
        label="Прізвище"
        value={profileData.userSurname}
        onChange={(value) => onProfileUpdate("userSurname", value)}
        readOnly={!isEditing}
        placeholder="Ваше прізвище *"
      />

      <EditableField
        label="Ел. пошта"
        value={profileData.email}
        onChange={(value) => onProfileUpdate("email", value)}
        readOnly={!isEditing}
        placeholder="example@gmail.com *"
      />

      <EditableField
        label="Пароль"
        value={profileData.password}
        onChange={(value) => onProfileUpdate("password", value)}
        readOnly={!isEditing}
        placeholder="*******"
      />

      <EditableField
        label="Про себе"
        value={profileData.about}
        onChange={(value) => onProfileUpdate("about", value)}
        readOnly={!isEditing}
        placeholder="Розкажіть про себе"
        isTextarea={true}
      />
    </form>
  );
};

export default ProfileForm;
