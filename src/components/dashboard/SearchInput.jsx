import React from "react";

const SearchInput = ({filterText, setFilterText}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Фільтрувати повідомлення за ключовими словами:
      </label>
      <input
        type="text"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchInput;
