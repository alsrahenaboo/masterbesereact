import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import{ Link } from 'react-router-dom'



function Header () {
  
  return (
    <header>
      <div className="header-top">
        <img src={require("../imges/logo.jpeg")} alt="Logo" className="logo" />
        <Link to="#" className="phone-number">
          <span className="phone-number">
            <MdOutlineLocalPhone /> (437) 265-0978
          </span>
        </Link>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="#" className="nav-button">
            Reviews
          </Link>
          <Link to ="/Contact" className="nav-button">
            Contact
          </Link>
          <div className="search-container">
            <Link to="#" className="navbutton">
              <IoMdSearch />
            </Link>
            <div className="searchpar">
              <input type="text" placeholder="Search.." />
              <IoMdSearch />
            </div>
          </div>
          <Link to="#">
            <CiFacebook />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/hardwood">Hardwood</Link>
          </li>
          <li>
            <Link to="/vinyl">Vinyl</Link>
          </li>
          <li>
            <Link to="/laminate">Laminate</Link>
          </li>
          <li>
            <Link to="/carpet">Carpet</Link>
          </li>
          <li>
            <Link to="/tiles">Tiles</Link>
          </li>
          <li>
            <Link to="#">Our services</Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Installation, removal and repair</Link>
              </li>
              <li>
                <Link to="#">Transport of goods</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
