import React from "react";
import Contact from "../contact/Contact";
import Btn from "../Btn/Btn";
import "./footer.css";
export default function() {
  return (
    <footer>
      <div className="columns is-1">
        <div className="column is-half">
          <div className="columns is-mobile">
            <div className="column office-details ">
              <div className="corporate-office ">
                <h4>corporate office</h4>
                <address>
                  <ul>
                    <li>304,ARCADIA,</li>
                    <li>195, NARIMAN POINT,</li>
                    <li>MUMBAI 400 021</li>
                  </ul>
                </address>
                <div className="phone-no ">
                  <ul>
                    <li>+91 22 2283 4116 </li>
                    <li>+91 22 4032 2786</li>
                    <li>neha@sarlafibers.com</li>
                  </ul>
                </div>
              </div>
              <div className="compliance-officer ">
                <h4>compliance officer</h4>
                <address>
                  <ul>
                    <li>Mahendra Seth</li>
                    <li>304, Arcadia</li>
                    <li>195, Nariman Point</li>
                    <li>Mumbai - 400 021</li>
                  </ul>
                </address>
              </div>
            </div>
            <div className="column quick-links ">
              <ul>
                <li>Quick link 1</li>
                <li>A longer Quick link optoin 2</li>
                <li>Quick link 3</li>
                <li>Anotherr Quick link optoin 2</li>
              </ul>
              <ul>
                <li>Quick link 1</li>
                <li>Quick link 2</li>
                <li>Quick link 3</li>
                <li>Quick link 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="columns">
            <div className="column is-3 is-hidden-mobile" />
            <div className="column">
              <Contact className="fz-12 footer-contact-heading footer-RmTrasn">
                <Btn
                  className="footer-submit-btn"
                  link="#fixme"
                  value="submit"
                />
              </Contact>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright ">
        <p>
          &copy; 2018 Sarla Performance Fabrics Limited. All rights reserved
        </p>
      </div>
    </footer>
  );
}
