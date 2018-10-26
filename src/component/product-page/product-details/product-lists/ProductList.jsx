import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function(props) {
  if (!props.list)
    throw Error("main-section->Product-details->ProductList:list is required");
  return props.list.map((elem, ind) => {
    return (
      <li
        key={ind}
        className={"p-5 prod-item " + (elem.className ? elem.className : "")}
      >
        <Link to={elem.to} href="#fixme" className="is-active">
          {elem.value}
        </Link>
      </li>
    );
  });
}
