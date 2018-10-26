import React, { Component, Fragment } from "react";
import HomeSection from "./home-section/HomeSection";
import Btn from "../Btn/Btn";
import Contact from "../contact/Contact";
class Home extends Component {
  state = {};
  render() {
    console.log();
    return (
      <Fragment>
        <HomeSection
          className="hello-section is-mobile"
          contentName="hello-content"
          isFirst={true}
          heading="Hello."
          imgIs4={true}
        >
          <p>
            An ISO 9001:2017 Certified Company, Sarla Performance Fibers Limited
            is engaged in the manufacturing and export of polyester and nylon
            textured, twisted and dyed yarns, covered yarns, high tenacity yarns
            and sewing thread.
          </p>
          <p>
            Sarla’s yarns and threads form a deep, intrinsic and invisible part
            of our everyday lives. Find us in the knee length socks worn by
            football players, or in the dress socks worn by a teenage girl; a
            well-worn t-shirt of an executive or in the fine hand sewing of
            leather shoes worn by an entrepreneur. Sown onto a luxury mattress
            or found in the stitching of your car upholstery. Our narrow fabrics
            sit well in the elastic tape of your boxers or in the intricate
            embroidery of your dress.
          </p>
          <p>
            Beginning as a manufacturer of commodity yarns, the company has
            successfully shifted its focus and established itself as a
            manufacturer of specialized and higher value-added yarns.
          </p>
          <Btn value="explore" link="#fixme" className="explore-btn" />
        </HomeSection>
        <HomeSection
          className="Product-range-section is-mobile"
          contentName="Product-range-content"
          isLast={true}
          heading="product range"
          isContent4={true}
        >
          <p>
            Sarla’s nylon and polyester products range over 250 different
            varieties of value added yarns and threads to suit each of our
            customer end applications.
          </p>
          <Btn value="explore" link="#fixme" className="explore-btn" />
        </HomeSection>
        <HomeSection
          className="niche-sector-section is-mobile"
          contentName="niche-sector-content"
          isFirst={true}
          heading="niche sector"
          isContent4={true}
        >
          <p>
            We are the preferred partner to niche sectors in the global apparel
            and textile industry having developed products, capabilities and
            services specific to the applications we serve.
          </p>
          <Btn value="explore" link="#fixme" className="explore-btn" />
        </HomeSection>
        <HomeSection
          className="facilities-section is-mobile"
          contentName="facilities-content"
          isLast={true}
          heading="the facilities"
          isContent4={true}
        >
          <p>
            With a recently upgraded dye house, SARLA’s in house dyeing
            capabilities ranges from a color bank of over 5000 shades with the
            ability to dye batches from 1 kg upto 400 kg with exceptional color
            consistency
          </p>
          <Btn value="explore" link="#fixme" className="explore-btn" />
        </HomeSection>
        <HomeSection
          className="connect-section connect-with-us"
          contentName="contact-content"
          isFirst={true}
          imgIs4={true}
        >
          <Contact className="title is-1">
            <Btn
              value="submit"
              link="#fixme"
              className="explore-btn margin-top-contact"
            />
          </Contact>
        </HomeSection>
      </Fragment>
    );
  }
}

export default Home;
