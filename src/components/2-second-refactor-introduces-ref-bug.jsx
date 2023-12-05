import React from "react";
import ReactTable from "react-table";
import { columns, data } from "./constants.jsx";

const CustomComponent = () => {
  let tableRef = undefined;

  const { onClick } = useTable(tableRef);

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

const useTable = (NOT_REALLY_THE_SAME_REF_AS_IN_THE_CALLING_COMPONENT) => {
  const onClick = () => {
    console.log(NOT_REALLY_THE_SAME_REF_AS_IN_THE_CALLING_COMPONENT);
  };

  return { onClick };
};

export default CustomComponent;
