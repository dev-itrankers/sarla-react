import React from "react";
export default function NicheSectorData(props) {
  var { title, info } = props;
  return (
    <div className="column is-6-desktop is-6-tablet">
      <div className="title niche-data-heading">{title}</div>
      <div className="info">{info}</div>
    </div>
  );
}
