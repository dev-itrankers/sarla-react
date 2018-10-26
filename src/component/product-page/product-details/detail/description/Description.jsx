import React from "react";
import "./Description.css";

export default function(props) {
  if (!props.children && props.heading)
    throw Error(
      "product-->product-detail-->detail --> description --> decription.jsx Decription not set"
    );

  let { heading, className } = props;
  return (
    <div
      className={
        "features detail det-none" + (className ? " " + className : "")
      }
    >
      <h1 className="subtitle is-6 is-uppercase details-heading">{heading}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}
