



import React from "react";
import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Tiles() {
  return (
    <>
      <Baye
        url={require("../imges/hardoodhero.png")}
        titl={"Tiles Flooring"}
      />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link>
        Tiles Flooring
        <div className="explan">
          <div className="explan-hardwood">
            <p>
              It is a type of flooring in which tiles are used as a covering
              material. Tiles come in a variety of materials such as ceramic,
              porcelain, natural stone, and glass. Tiles are a popular choice
              for flooring in homes and commercial buildings due to their many
              advantages such as durability, ease of maintenance and cleaning,
              and resistance to water and moisture.
            </p>
            <h1>What Is Tiles Flooring?</h1>
            <p>
              refers to the installation of tiles as a floor covering. Tiles can
              be made from a variety of materials including ceramic, porcelain,
              stone, glass, and even certain types of vinyl. This type of
              flooring is popular in both residential and commercial settings
              due to its durability, versatility, and aesthetic
              appeal.Durability:Tiles, especially ceramic and porcelain, are
              known for their strength and ability to withstand heavy foot
              traffic. They are resistant to scratches, dents, and wear, making
              them ideal for high-traffic areas. Ease of Maintenance:Tiles are
              easy to clean and maintain. They resist stains, spills, and water,
              which makes them perfect for kitchens, bathrooms, and other areas
              prone to moisture. Regular sweeping and mopping are usually
              sufficient to keep tile floors looking new.
            </p>
          </div>
          <div className="img-hardwood">
            <img src={require("../imges/tils.png")} alt="lam" />
          </div>
        </div>
        <div className="product">
          <ProductCard
            url={require("../imges/til1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til5.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til6.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til7.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til8.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til9.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til10.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til11.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/til12.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
        </div>
      </div>
    </>
  );
}
export default Tiles;
