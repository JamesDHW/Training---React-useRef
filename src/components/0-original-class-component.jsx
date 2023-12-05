import React, { Component } from "react";
import ReactTable from "react-table";
import { columns, data } from "./constants.jsx";

class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.tableRef = undefined;
  }

  render() {
    const onClick = () => {
      console.log(this.tableRef);
    };

    return (
      <>
        <button type="button" onClick={onClick}>
          Show react table ref
        </button>
        <ReactTable
          data={data}
          columns={columns}
          ref={(input) => (this.tableRef = input)}
        />
      </>
    );
  }
}

export default CustomComponent;
