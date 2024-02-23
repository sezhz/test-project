import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import fakeData from "../../fakeData.json";
import SearchInput from "./SearchInput";
import MessageTable from "./MessageTable";
import EmptyState from "./EmptyState";
import Statistics from "./Statistics";

const Dashboard = () => {
  const initialState = {
    telegram: "",
    viber: "",
    whatsapp: "",
  };

  const [profileData, setProfileData] = useLocalStorage(
    "profileData",
    initialState
  );
  const [filledStatus, setFilledStatus] = useLocalStorage("filledStatus", {
    telegram: false,
    viber: false,
    whatsapp: false,
  });

  useEffect(() => {
    setFilledStatus({
      telegram: Boolean(profileData.telegram),
      viber: Boolean(profileData.viber),
      whatsapp: Boolean(profileData.whatsapp),
    });
  }, [profileData, setFilledStatus]);

  const columns = [
    { label: "Час", field: "timestamp" },
    { label: "Автор", field: "author" },
    { label: "Повідомлення", field: "text" },
    { label: "Реакції", field: "likes" },
  ];

  const [filterText, setFilterText] = useState("");

  let allMessages = [];
  Object.entries(filledStatus).forEach(([account, isFilled]) => {
    if (isFilled && fakeData[account]) {
      const accountData = fakeData[account];
      allMessages = allMessages.concat(accountData.messages);
    }
  });

  const filteredMessages = allMessages.filter((message) =>
    message.text.toLowerCase().includes(filterText.toLowerCase())
  );

  const statistics = Object.entries(filledStatus).reduce(
    (acc, [account, isFilled]) => {
      acc[account] = isFilled ? fakeData[account]?.messages.length || 0 : 0;
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col w-full h-screen max-h-screen p-8 px-1 pb-0 sm:px-80 sm:pb-20">
      <Statistics statistics={statistics} />
      <SearchInput filterText={filterText} setFilterText={setFilterText} />
      {Object.values(filledStatus).some((filled) => filled) ? (
        <MessageTable columns={columns} data={filteredMessages} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Dashboard;
