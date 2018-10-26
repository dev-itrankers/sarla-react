import React from "react";
import "./NeedInfo.css";
export default function NeedInfo(props) {
  var { title, subtitle, email } = props;
  return (
    <section className="further-info">
      <div className="further-info-content">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">
          {subtitle}
          <b>{email}</b>
        </h2>
      </div>
    </section>
  );
}
