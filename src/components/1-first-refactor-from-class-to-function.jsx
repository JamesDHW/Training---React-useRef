import React from "react";
import ReactTable from "react-table";
import { columns, data } from "./constants.jsx";

const CustomComponent = () => {
  const tableRef = undefined;

  const onClick = () => {
    console.log(tableRef);
  };

  return (
    <>
      <button type="button" onClick={onClick}>
        Show react table ref
      </button>
      <ReactTable
        data={data}
        columns={columns}
        ref={(input) => (tableRef = input)}
      />
    </>
  );
};

export default CustomComponent;
