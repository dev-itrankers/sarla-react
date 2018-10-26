import React, { Component } from "react";
import NavbarItem from "./navbar-item/navbar-item";
import Stock from "./stock/Stock";
import "./navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
class Navbar extends Component {
  state = {
    stock: {
      nsc: {
        value: "1006.20",
        name: "NSC",
        arrow: "fa-arrow-up",
        stockPre: "+1.55%",
        color: "green"
      },
      bsc: {
        value: "1006.70",
        name: "BSC",
        arrow: "fa-arrow-down",
        stockPre: "-1.55%",
        color: "red"
      }
    }
  };
  render() {
    return (
      <header>
        <nav
          className="navbar nav-padding is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="#fixme">
              <img src="assets/images/logo/Logo.jpg" />
            </a>
            <a
              href="#fixme"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Router>
                <React.Fragment>
                  <NavbarItem value="the company" has-dropdown>
                    <NavbarItem value="history and key milestones" />
                    <NavbarItem value="company profile" />
                    <NavbarItem value="board of directors" />
                    <NavbarItem value="vision & mision" />
                    <NavbarItem value="new ventures & future plans" />
                    <NavbarItem value="innovation @ SPFL" />
                    <NavbarItem value="quality policy" />
                  </NavbarItem>
                  <NavbarItem
                    value="global presence"
                    className="is-uppercase"
                  />
                  <NavbarItem value="products" has-dropdown>
                    <NavbarItem value="textured polyester Yarns" />
                    <NavbarItem value="textured nylon stretch Yarns" />
                    <NavbarItem value="Bulklon" />
                    <NavbarItem value="textured sewing Thread" />
                    <NavbarItem value="covered yarns" />
                    <NavbarItem value="high tenacity Yarns" />
                  </NavbarItem>
                  <NavbarItem value="for investors" has-dropdown>
                    <NavbarItem value="from the desk of the managing directors" />
                    <NavbarItem value="investor information" />
                    <NavbarItem value="financial information" />
                    <NavbarItem value="press releases" />
                    <NavbarItem value="stock information" />
                    <NavbarItem value="investor contact" />
                    <NavbarItem value="corporate governance" />
                    <NavbarItem value="placement document" />
                    <NavbarItem value="notice for investor" />
                  </NavbarItem>
                  <NavbarItem
                    value="contact us"
                    className="scroll-nav contact-us is-uppercase"
                    target="contact-form"
                  />
                </React.Fragment>
              </Router>
            </div>
            <div className="navbar-end">
              <div className="navbar-item stoke">
                <ul>
                  <li>
                    <Stock stock={this.state.stock.nsc} />
                  </li>
                  <li>
                    <Stock stock={this.state.stock.bsc} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
