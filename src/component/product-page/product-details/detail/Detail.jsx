import React from "react";
import Table from "./tables/Tables";
import Description from "./description/Description";
import "./Detail.css";

export default function(props) {
  let { scrollClass, closeClass } = props;
  return (
    <div className={"scroll-bar " + (scrollClass ? scrollClass : "")}>
      <div className="close-btn" onClick={props.onClose}>
        <a href="#fixme" className="button is-white is-uppercase">
          close
          <i className="fas fa-times" />
        </a>
      </div>
      <div className=" details ">
        <Description
          heading="features"
          className={"features " + closeClass + "1"}
        >
          <li>Excellent bulk properties</li>
          <li>Okeo – tex certified 100 className 1 for baby wear</li>
          <li>Good abrasive properties enabling extended fabric life</li>
          <li>High degree of colorfastness to withstand extensive washing</li>
        </Description>
        <Description
          heading="applications"
          className={"applications " + closeClass + "2"}
        >
          <li>Sewing Thread</li>
          <li>Furniture Upholstery</li>
          <li>Automotive Upholstery</li>
          <li>Narrow Fabrics and Tapes and more</li>
        </Description>
        <Description
          heading="available in"
          className={"available " + closeClass + "3"}
        >
          <li>Raw white, Twisted raw white, Twisted raw white on dye </li>
          <li>tubes, Textured dyed, Twisted dyed, Twisted - 60 TPM</li>
          <li>onwards, Batch sizes : From 5KG - 400KG</li>
        </Description>
        <Table closeClass={closeClass} />
      </div>
    </div>
  );
}
