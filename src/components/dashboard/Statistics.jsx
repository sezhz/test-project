import React from "react";

const Statistics = ({ statistics }) => {
  return (
    <div className="mb-8 sm:ml-0 ml-4">
      <div className="text-lg font-semibold">Всього повідомлень:</div>
      <h2 className="text-lg">
        <ul>
          {Object.entries(statistics).map(([messenger, count]) => (
            <li key={messenger}>
              {messenger}: {count}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default Statistics;
