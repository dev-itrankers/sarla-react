import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  if (!props.value) throw Error("NavbarItem:Value is required");
  if (props["has-dropdown"]) {
    if (!props["children"])
      throw Error(
        "NavbarItem:children is required with has-dropdown attribute"
      );
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <Link to="/" className="navbar-link is-uppercase" href="#fixme">
          {props.value}
        </Link>
        <div className="navbar-dropdown nav-dropdown is-boxed is-capitalized">
          {props.children}
        </div>
      </div>
    );
  } else {
    var { value, className, ...rest } = props;
    return (
      <Link
        to="/"
        className={"navbar-item" + (className ? " " + className : "")}
        {...rest}
      >
        {value}
      </Link>
    );
  }
}
