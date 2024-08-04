



import React from "react";
import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Tiles() {
  return (
    <>
      <Baye url={require("../imges/carpet.png")} titl={"Carpet Flooring"} />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link>
        Carpet Flooring
        <div className="explan">
          <div className="explan-hardwood">
            <p>
              Floor carpet is a type of flooring used to cover the interior
              floors of buildings, whether they are homes, offices, or public
              places. Carpets are soft and warm, and come in a variety of colors
              and designs, making them a popular choice for improving the
              aesthetic appeal and comfort of different spaces. Let me clarify
              some key points about floor carpets:
            </p>
            <h1>What Is Carpet Flooring?</h1>
            <p>
              Carpet flooring is a type of floor covering used in interior
              spaces, made from woven or tufted fibers. It's commonly installed
              in homes, offices, and public buildings due to its comfort,
              insulation properties, and aesthetic appeal. Here are some key
              aspects of carpet flooringCut Pile Carpet: Features sheared
              fibers, giving it a soft and plush appearance. Loop Pile Carpet:
              Made of uncut loops of yarn, known for its durability. Cut and
              Loop Pile Carpet Combines both cut and looped fibers, creating
              textured patterns. Comfort Provides a soft surface that's
              comfortable to walk or sit on. Thermal Insulation Helps maintain
              room temperature. Sound Insulation Reduces noise and absorbs
              sound. Aesthetic Variety Available in numerous colors, patterns,
              and textures to match any décor.
            </p>
          </div>
          <div className="img-hardwood">
            <img src={require("../imges/carpsec.png")} alt="lam" />
          </div>
        </div>
        <div className="product">
          <ProductCard
            url={require("../imges/carp1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp5.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp6.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp7.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp8.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp9.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp10.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp11.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/carp12.png")}
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
