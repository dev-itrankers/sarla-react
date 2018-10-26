import React, { Component, Fragment } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/navbar";
import ProductPage from "./component/product-page/ProductPage";
class App extends Component {
  state = {
    navbarCLass: ""
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {};

  render() {
    return (
      <Fragment>
        <Navbar />
        <main>
          <Home />
          {/* <ProductPage /> */}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
