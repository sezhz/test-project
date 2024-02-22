import React from "react";
import SortableTable from "./SortableTable";

const MessageTable = ({ columns, data }) => {
  return (
    <div className="max-h-full overflow-y-auto">
      <SortableTable
        columns={columns}
        data={data}
        defaultSortField="timestamp"
        defaultSortOrder="asc"
      />
    </div>
  );
};

export default MessageTable;
