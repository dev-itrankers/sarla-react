import React from "react";
function createRowData(props) {
  let { value, className } = props;
  if (value === "fas") {
    return (
      <td>
        <i className={"fas" + (className ? " " + className : "")} />
      </td>
    );
  } else return <td>{value}</td>;
}
function TableRow(props) {
  if (!props.value)
    throw Error("main-section->Product-details->TableData:value is required");

  return createRowData(props);
}
export default TableRow;
