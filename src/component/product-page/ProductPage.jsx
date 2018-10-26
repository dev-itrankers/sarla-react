import React, { Component, Fragment } from "react";
import ProductDetail from "./product-details/ProductDetail";
import Hero from "./product-hero/Hero";
import NeedInfo from "./need-info/NeedInfo";
import HomeSection from "../home/home-section/HomeSection";
import NicheSectorData from "../product-page/NicheSectorData/NicheSectorData";
import "./ProductPage.css";
class ProductPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <ProductDetail />
        <HomeSection
          className="product-page-niche-section niche-sector-section is-mobile"
          contentName="niche-sector-content"
          isFirst={true}
          heading="niche sectors"
          imgIs4={true}
        >
          <NicheSectorData />
        </HomeSection>
        <NeedInfo
          title="Need further information?"
          subtitle="For our product portfolio or a specific product inquiry, please email
        us at "
          email="neha@sarlafibers.com"
        />
      </Fragment>
    );
  }
}

export default ProductPage;
