


import React from "react";
import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";

function Contact() {
  return (
    <>
      <Baye url={require("../imges/laminat.png")} titl={"Contact Us"} />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link> Contact
        <h1>Contact Our Flooring Experts</h1>
        <div className="contact-section">
          <div className="contact-info">
            <p>
              Our customer service representatives are on-hand to help you with
              any query. If you want to know more about our flooring products or
              our various flooring services, we invite you to send us a message
              using the contact form to the right.
            </p>
            <p>
              All of our showrooms are staffed with customer service teams that
              have extensive knowledge of everything related to flooring. You
              can take advantage of their knowledge and skills by contacting us
              today to inquire about flooring.
            </p>
          </div>
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
              <input type="tel" name="phone" placeholder="Phone" required />
              <input type="email" name="email" placeholder="E-mail" required />
              <textarea name="requirement" placeholder="Requirement" required />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
