import React, { useState } from "react";
import { format } from "date-fns";

const SortableTable = ({
  columns,
  data,
  defaultSortField,
  defaultSortOrder,
}) => {
  const [sortOrder, setSortOrder] = useState({
    field: defaultSortField,
    ascending: defaultSortOrder === "asc",
  });

  const handleSort = (field) => {
    setSortOrder({
      field,
      ascending: sortOrder.field === field ? !sortOrder.ascending : true,
    });
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortOrder.field];
    const valueB = b[sortOrder.field];

    if (sortOrder.ascending) {
      return sortOrder.field === "timestamp"
        ? new Date(valueA) - new Date(valueB)
        : valueA > valueB
        ? 1
        : valueA < valueB
        ? -1
        : 0;
    } else {
      return sortOrder.field === "timestamp"
        ? new Date(valueB) - new Date(valueA)
        : valueA < valueB
        ? 1
        : valueA > valueB
        ? -1
        : 0;
    }
  });

  return (
    <table className="table-auto max-w-full w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.field}
              className="border border-gray-400 px-4 py-2 cursor-pointer w-1/4 relative"
              onClick={() => handleSort(column.field)}
            >
              {column.label}
              {sortOrder.field === column.field && (
                <span
                  className={`absolute ml-1 ${
                    sortOrder.ascending ? "top-2" : "bottom-2"
                  }`}
                >
                  {sortOrder.ascending ? "↑" : "↓"}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td
                key={column.field}
                className="border border-gray-400 px-4 py-2 w-1/4"
              >
                {column.field === "timestamp"
                  ? format(new Date(item[column.field]), "dd.MM.yyyy HH:mm", {
                      timeZone: "Europe/Kiev",
                    })
                  : item[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
