import React from "react";
import "./inputType.css";
export default function(props) {
  var { labelName, className, value } = props;
  return (
    <div
      className={"inp ht-35 mb-24 fz-10" + (className ? " " + className : "")}
    >
      <label htmlFor={labelName}>
        <input
          required
          type="text"
          name={labelName}
          id={labelName}
          defaultValue={value ? value : ""}
        />
        <span className="form-label">{labelName}</span>
      </label>
    </div>
  );
}
