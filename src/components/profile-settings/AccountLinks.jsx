import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountField from "./AccountField";
import useLocalStorage from "../../hooks/useLocalStorage";

const AccountLinks = ({ onProfileUpdate }) => {
  const initialState = {
    telegram: "",
    viber: "",
    whatsapp: "",
  };

  const [isEditing, setIsEditing] = useState(initialState);
  const [fieldToDisconnect, setFieldToDisconnect] = useState("");

  const [filledStatus, setFilledStatus] = useState({
    telegram: false,
    viber: false,
    whatsapp: false,
  });

  const [profileData, setProfileData] = useLocalStorage(
    "profileData",
    initialState
  );

  useEffect(() => {
    setFilledStatus({
      telegram: Boolean(profileData.telegram),
      viber: Boolean(profileData.viber),
      whatsapp: Boolean(profileData.whatsapp),
    });
  }, [profileData]);

  const handleToggleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleDisconnect = (field) => {
    setFieldToDisconnect(field);
  };

  const renderAccountField = (label, dataKey) => (
    <AccountField
      label={label}
      value={profileData[dataKey]}
      onUpdate={(value) => {
        setProfileData((prev) => ({ ...prev, [dataKey]: value }));
        onProfileUpdate(dataKey, value);
        setFilledStatus((prev) => ({ ...prev, [dataKey]: Boolean(value) }));
      }}
      onDisconnect={() => handleDisconnect(dataKey)}
      isEditing={isEditing[dataKey]}
      onToggleEdit={() => handleToggleEdit(dataKey)}
      isFilled={filledStatus[dataKey]}
    />
  );

  return (
    <div className="sm:w-1/2 h-full p-4 flex flex-col items-center border border-gray-400 rounded-lg">
      <h2 className="text-2xl font-semibold mb-14">Прив'язка акаунтів</h2>

      {renderAccountField("Telegram", "telegram")}
      {renderAccountField("Viber", "viber")}
      {renderAccountField("WhatsApp", "whatsapp")}
      <Link
        to="/dashboard"
        className="text-xl text-gray-500 hover:text-gray-800 my-6"
      >
        Перейти до повідомлень
      </Link>
    </div>
  );
};

export default AccountLinks;
