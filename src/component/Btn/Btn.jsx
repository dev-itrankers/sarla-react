import React from "react";
import "./Btn.css";
export default function Btn(props) {
  var { link, value, className } = props;
  return (
    <a
      className={"button mian-btn is-centered is-uppercase " + className}
      href={link}
    >
      {value}
    </a>
  );
}
