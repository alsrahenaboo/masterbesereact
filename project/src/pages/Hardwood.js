import React from "react";
import { Link } from "react-router-dom";
import Baye from "../componant/sherdcom.js/sectionpay";
import ProductCard from "../componant/sherdcom.js/CardsServes";




function Hardwood (){
    return (
      <>
        <Baye
          url={require("../imges/hardoodhero.png")}
          titl={"Hardwood Flooring"}
        />
        <div className="contener">
         <Link to="/">
        <span>Home &gt;&gt;</span>
      </Link>
          Hardwood Flooring
          <div className="explan">
            <div className="explan-hardwood">
              <p>
                Whether you are looking to design or renovate your commercial or
                residential space, hardwood flooring is a reliable option that
                offers classic charm. It adds a sense of permanence to
                interiors, and its natural beauty warms any space. Moreover, the
                material has the ability to enhance the overall ambience of any
                room, making it suitable for both traditional and modern spaces.
                If you are in search of flooring that never goes out of style
                and blends in with any decor, hardwood flooring is the right
                choice. Regardless of its application, it’s a reliable and
                stylish option that will last many years.
              </p>
              <h1>What Is Hardwood Flooring?</h1>
              <p>
                Hardwood flooring is made from deciduous trees, like oak, which
                grow relatively slower than other varieties, offering a denser
                and more durable, stable, and stylish product. However, the
                durability completely depends on the , which can be domestic or
                imported. While the standard thickness of most solid wood planks
                is three-quarters of an inch, the planks can be sawn in various
                ways; primarily flat-sawn, quarter-sawn, or rift-sawn. You can
                choose from sealed or stained hardwood planks that come with
                several coats of a protective finish or invest in unfinished
                planks that are finished on site.
              </p>
            </div>
            <div className="img-hardwood">
              <img src={require("../imges/hardwoodexp.png")}  alt="hard"/>
            </div>
          </div>
          <div className="product">
            <ProductCard
              url={require("../imges/hard1.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard2.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard3.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard4.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard5.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard6.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard7.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard8.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard9.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard10.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard11.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
            <ProductCard
              url={require("../imges/hard12.png")}
              name={"Europe Parks Collection 8MM Engineered Hardwood – Saxon"}
              Price={4.99}
              salePrice={3.49}
            />
          </div>
        </div>
      </>
    );
}
export default Hardwood;