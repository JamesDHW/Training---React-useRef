import React from "react";
import ReactTable from "react-table";
import { columns, data } from "./constants.jsx";

const CustomComponent = () => {
  let tableRef = React.useRef();

  const { onClick } = useTable(tableRef);

  return (
    <>
      <button type="button" onClick={onClick}>
        Show react table ref
      </button>
      <ReactTable data={data} columns={columns} ref={tableRef} />
    </>
  );
};

const useTable = (REF_FROM_USE_REF) => {
  const onClick = () => {
    console.log(REF_FROM_USE_REF);
  };

  return { onClick };
};

export default CustomComponent;
