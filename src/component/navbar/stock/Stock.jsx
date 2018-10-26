import React from "react";
import "./stock.css";
function Stock(props) {
  if (!props.stock) throw Error("stock:stock details  is required");
  let { value, name, arrow, stockPre, color } = props.stock;
  return (
    <React.Fragment>
      {name} {value}
      <span className={color}>
        {stockPre}
        <i className={"fas" + " " + arrow} />
      </span>
    </React.Fragment>
  );
}

export default Stock;
