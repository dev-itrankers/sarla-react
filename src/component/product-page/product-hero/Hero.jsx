import React from "react";
import Btn from "../../Btn/Btn";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body prod-hero-content">
        <div className="container">
          <h1 className="title is-uppercase hero-heading">our products</h1>
          <h2 className="subtitle">
            Engineered & designed to provide solutions.
          </h2>
          <div className="prod-hero-btn">
            <Btn
              value="products"
              link="#fixme"
              className="explore-btn margin-top-contact"
            />
            <Btn
              value="niche sectors"
              link="#fixme"
              className="explore-btn margin-top-contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
