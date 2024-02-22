import React from "react";
import ProfileForm from "./ProfileForm";
import ProfileSettingsButtons from "./ProfileSettingsButtons";
import AccountLinks from "./AccountLinks";

const ProfileSettingsMain = ({
  profileData,
  onProfileUpdate,
  isEditing,
  onSaveChanges,
  onCancelEdit,
  setIsEditing,
}) => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full p-10 sm:p-20">
      <div className="sm:w-1/2 h-full p-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-14">Змінити дані профілю</h2>
        <ProfileForm
          profileData={profileData}
          onProfileUpdate={onProfileUpdate}
          isEditing={isEditing}
        />
        {isEditing ? (
          <ProfileSettingsButtons
            onSaveChanges={onSaveChanges}
            onCancelEdit={onCancelEdit}
          />
        ) : (
          <div className="py-8">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsEditing(true)}
            >
              Редагувати
            </button>
          </div>
        )}
      </div>

      <div className="sm:w-1/2 h-full p-4 flex flex-col items-center">
        <AccountLinks
          profileData={profileData}
          onProfileUpdate={onProfileUpdate}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
};

export default ProfileSettingsMain;
