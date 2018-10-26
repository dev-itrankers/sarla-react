import React, { Component } from "react";
import Detail from "./detail/Detail";
import ProductList from "./product-lists/ProductList";
import "./ProductDetail.css";
import { BrowserRouter as Router } from "react-router-dom";
class ProductDetail extends Component {
  state = {
    scrollClass: "",
    closeClass: "",
    current: 4,
    productList: [
      {
        to: "#fixme",
        value: "Textured Polyester Yarns",
        className: ""
      },
      {
        to: "#fixme",
        value: "Textured Nylon Stretch Yarns",
        className: ""
      },
      {
        to: "#fixme",
        value: "Bulklon",
        className: ""
      },
      {
        to: "#fixme",
        value: "Textured Sewing Thread",
        className: ""
      },
      {
        to: "#fixme",
        value: "Covered Yarns",
        className: "active"
      },
      {
        to: "#fixme",
        value: "High Tenacity Yarns",
        className: ""
      },
      {
        to: "#fixme",
        value: "Dyed Yarns & Threads",
        className: ""
      },
      {
        to: "#fixme",
        value: "Bonded Threads",
        className: ""
      },
      {
        to: "#fixme",
        value: "Embroidery Threads",
        className: ""
      },
      {
        to: "#fixme",
        value: "Mattress Threads",
        className: ""
      }
    ]
  };

  upProduct = _ => {
    if (this.state.current === 0) return;
    var temp = this.state.current;
    this.setState({
      productList: this.state.productList.map((elem, ind) => {
        return ind === this.state.current
          ? { to: elem.to, value: elem.value, className: "" }
          : ind === this.state.current - 1
            ? { to: elem.to, value: elem.value, className: "active" }
            : elem;
      })
    });
    this.setState({ current: --temp });
  };

  downProduct = _ => {
    if (this.state.current + 1 === this.state.productList.length) return;
    var temp = this.state.current;
    this.setState({
      productList: this.state.productList.map((elem, ind) => {
        return ind === this.state.current
          ? { to: elem.to, value: elem.value, className: "" }
          : ind === this.state.current + 1
            ? { to: elem.to, value: elem.value, className: "active" }
            : elem;
      })
    });
    this.setState({ current: ++temp });
  };

  onClickDetails = _ => {
    this.setState({ scrollClass: "active" });
    this.setState({ closeClass: "det-animate-" });
  };

  onClickCloseDetails = _ => {
    this.setState({ scrollClass: "" });
    this.setState({ closeClass: "" });
  };

  render() {
    return (
      <section className="prod-details is-fullheight">
        <Detail
          onClose={this.onClickCloseDetails}
          scrollClass={this.state.scrollClass}
          closeClass={this.state.closeClass}
        />
        <div className="wrapper">
          <div className="list is-start">
            <span className="icon prod-up-arrow">
              <i
                className="far fa-arrow-alt-circle-up"
                onClick={this.upProduct}
              />
            </span>
            <ul className="prod-list-ul">
              <Router>
                <React.Fragment>
                  <ProductList list={this.state.productList} />
                </React.Fragment>
              </Router>
            </ul>
            <span className="icon prod-down-arrow">
              <i
                className="fas fa-arrow-alt-circle-down"
                onClick={this.downProduct}
              />
            </span>
          </div>
          <div className="det-btn" target="prod-details">
            <a
              href="#fixme"
              className="button is-primary is-inverted is-outlined is-uppercase is-center"
              onClick={this.onClickDetails}
            >
              details
              <i className="fas fa-arrow-right det-arrow" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetail;
