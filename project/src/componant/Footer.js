import React from "react";
import { Link } from "react-router-dom";







function Footer () {
    return (
      <>
        <div className="fot-contaner">
          <div className="content">
            <div className="about-us">
              <h5>ABOUT US</h5>
              <p>
                Al-Azzama Company is committed to providing installation,
                removal, and home repair services, in addition to shipping
                high-quality hardwood flooring, tile, carpet, and vinyl
                products, at the best possible prices in Canada.
              </p>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="links">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/Hardwood">Hardwood</Link>
                </li>
                <li>
                  <Link to="/Vinyl">Vinyl</Link>
                </li>
                <li>
                  <Link to="/Laminate">Laminate</Link>
                </li>
                <li>
                  <Link to="/Carpet">Carpet</Link>
                </li>
                <li>
                  <Link to="/Tiles">Tiles</Link>
                </li>
                <li>
                  <Link to="/Installations">Installations project</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="contact-info">
              <h5>TORONTO</h5>
              <p>TELEPHONE: (437) 265-9978</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright 2024 © Flooring Liquidators | Terms and Conditions |
              Privacy Policy
            </p>
          </div>
        </div>
      </>
    );
};
export default Footer;