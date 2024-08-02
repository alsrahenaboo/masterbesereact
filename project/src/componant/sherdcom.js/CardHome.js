import { FaArrowRight } from "react-icons/fa";

function CardHome({ url, title }) {
  return (
    <div className="flooring-cards">
      <img src={url} alt="Hardwood Flooring" />

      <div className="textincards">
        <a href="#">{title}</a>

        <FaArrowRight className="fa-arrow-right" />
      </div>
    </div>
  );
}
export default CardHome;
