import React from "react";
import "./homeSection.css";
export default function HomeSection(props) {
  var {
    isFirst,
    isLast,
    heading,
    className,
    contentName,
    imgIs4,
    isContent4
  } = props;
  return (
    <section className={"columns" + (className ? " " + className : "")}>
      {isFirst ? (
        <div className={"column img" + (imgIs4 ? " is-4" : "")} />
      ) : (
        ""
      )}
      <div
        className={
          "column" +
          (contentName ? " " + contentName : "") +
          (isContent4
            ? " is-4-desktop is-4-tablet is-8-mobile vertical-center"
            : "")
        }
      >
        {contentName === "contact-content" ? (
          props.children
        ) : (
          <div>
            <h1
              className={
                "title is-1" + (heading == "Hello." ? "" : " is-uppercase")
              }
            >
              {heading}
            </h1>
            {props.children}
          </div>
        )}
      </div>
      {isLast ? <div className={"column img" + (imgIs4 ? " is-4" : "")} /> : ""}
    </section>
  );
}
