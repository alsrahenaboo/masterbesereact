
import React from "react";
import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";

function Laminat() {
  return (
    <>
      <Baye url={require("../imges/laminat.png")} titl={"Laminat Flooring"} />
      <div className="contener">
        <Link to="/">
          <span>Home &gt;&gt;</span>
        </Link>
        Laminat Flooring
        <div className="explan">
          <div className="explan-hardwood">
            <p>
              Laminate flooring is an excellent choice when you have a
              restricted budget but still want your home to look fabulous. These
              days you can find laminate flooring that not only mimics the look
              of its natural counterparts but also their texture, making it even
              more appealing. From domestic to commercial spaces, this popular
              flooring material is versatile enough to be used in any part of
              the house and requires minimum maintenance.
            </p>
            <h1>What Is LaminatFlooring?</h1>
            <p>
              Laminate flooring is made with wooden materials that are bonded
              with pressure and resins. The top layer is a high definition image
              of the natural product it mimics. While the surface is water
              resistant, the base of these boards and planks is susceptible to
              water damage if spills are not cleaned quick enough. Laminate can
              be used in any part of the house apart from the bathroom. It is
              hassle free and easy to clean, and with proper cleaning, you can
              keep it as good as new for decades.
            </p>
          </div>
          <div className="img-hardwood">
            <img src={require("../imges/lm.png")} alt="lam" />
          </div>
        </div>
        <div className="product">
          <ProductCard
            url={require("../imges/lam1.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam2.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam3.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam4.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam5.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam6.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam7.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam8.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam9.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam10.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam11.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
          <ProductCard
            url={require("../imges/lam12.png")}
            name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
            Price={4.99}
            salePrice={3.49}
          />
        </div>
      </div>
    </>
  );
}
export default Laminat;