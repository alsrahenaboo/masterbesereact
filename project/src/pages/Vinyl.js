 import React from "react";
 import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Vinyl() {
  return (
    <>
      <Baye url={require("../imges/vinlesec.png")} titl={"Vinyl Flooring"} />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link>
        Vinyl Flooring
        <div className="explan">
          <div className="explan-hardwood">
            <p>
              Vinyl is a versatile, practical, and affordable flooring option
              that offers durability as few other flooring materials can. It’s
              available in numerous colours and patterns and requires little to
              no maintenance, making it perfect for busy homes and commercial
              spaces. With advances in technology, you can choose from new
              generations of vinyl with numerous style options, ensuring your
              property has the look and feel you want without overspending.
            </p>
            <h1>What Is Vinyl Flooring?</h1>
            <p>
              Vinyl is a popular flooring material made using synthetics such as
              PVC, fibreglass, and plasticizers. It is made using multiple
              layers and a thick core which offers superior durability and
              comfort, making it suitable for high-traffic areas in both
              commercial properties and institutions. Additionally, this method
              of engineering the flooring provides moisture resistance, to the
              point that you can also find waterproof varieties. This makes it a
              good choice for bathrooms, mudrooms, kitchens, bedrooms, dining
              and living rooms.
            </p>
          </div>
          <div className="img-hardwood">
            <img src={require("../imges/vinhero.png")} alt="VIN" />
          </div>
        </div>
        <div className="product">
          <ProductCard
            url={require("../imges/vin1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/vin4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
        </div>
      </div>
    </>
  );
}
export default Vinyl;
