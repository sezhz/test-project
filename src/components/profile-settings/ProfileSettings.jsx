import React from "react";
import ProfileSettingsMain from "./ProfileSettingsMain";
import useLocalStorage from "../../hooks/useLocalStorage";

const ProfileSettings = () => {
  const initialProfileData = {
    username: "",
    email: "",
    password: "",
  };

  const [profileData, setProfileData] = useLocalStorage(
    "profileData",
    initialProfileData
  );
  const [isEditing, setIsEditing] = React.useState(false);

  const handleProfileUpdate = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setProfileData(initialProfileData);
    setIsEditing(false);
  };

  return (
    <ProfileSettingsMain
      profileData={profileData}
      onProfileUpdate={handleProfileUpdate}
      isEditing={isEditing}
      onSaveChanges={handleSaveChanges}
      onCancelEdit={handleCancelEdit}
      setIsEditing={setIsEditing}
    />
  );
};

export default ProfileSettings;
