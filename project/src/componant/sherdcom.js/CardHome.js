
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function CardHome({ url, title, path }) {
  return (
    <div className="flooring-cards">
      <img src={url} alt={title} />
      <div className="textincards">
        <Link to={path}>{title}</Link>
        <FaArrowRight className="fa-arrow-right" />
      </div>
    </div>
  );
}

export default CardHome;
