import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { Table as ReactstrapTable } from "reactstrap";

//argument distructring
const Table = ({ columns, data }) => {
  return (
    <ReactstrapTable size="md" responsive striped>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </ReactstrapTable>
  );
};

export default Table;
