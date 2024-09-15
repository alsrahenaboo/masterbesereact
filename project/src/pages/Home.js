import CardHome from "../componant/sherdcom.js/CardHome";
import { Link } from "react-router-dom";





function Home (){
    return (
      <>
        <div className="contener">
          <div className="hero">
            <img src={require("../imges/heroimg.jpeg")} alt="hero" />
            <p>
              Azazma company carries a wide range of luxury flooring products
              that add a refined look and feel to any residential or commercial
              space. From hardwood and tile to laminate and carpet, stock
              high-quality products from many trusted domestic and foreign
              flooring brands. .
            </p>
          </div>
          <h1>
            Why Choose <span>Azazma Floors?</span>
          </h1>
          <div className="hero2">
            <img src={require("../imges/imagehero2.jpeg")} alt="hero2" />
            <p>
              We have been in the flooring industry for over 2 years now and
              have worked with a diverse group of clientele, including
              homeowners, builders, contractors, designers, . Our experience has
              provided us with many unique challenges, and we have always
              managed to provide our clients with the products and services they
              needed to create an elegant and refined space. Our team
              understands that every client takes a different path to achieve
              their dream home, which is why we tailor our service to each
              individual client.
            </p>
          </div>
          <h1>
            Browse Our <span>Flooring Categories</span>
          </h1>
          <div className="flooring-categories">
            <CardHome
              url={require("../imges/Rectangle 12.png")}
              title="Hardwood Flooring"
              path="/Hardwood"
            />

            <CardHome
              url={require("../imges/Group 33.png")}
              title={"Vinyl  Flooring "}
              path="/Vinyl"
            />

            <CardHome
              url={require("../imges/3a.png")}
              title={"Laminate  Flooring "}
              path="/Laminate"
            />

            <CardHome
              url={require("../imges/4a.png")}
              title={"Carpet Flooring"}
              path="/Carpet"
            />

            <CardHome
              url={require("../imges/5a.png")}
              title={"Tiles  Flooring "}
              path={"/Tiles"}
            />
          </div>
          <div className="imgandtext">
            <img src={require("../imges/Rectangle 9.png")} alt="" />
            <img src={require("../imges/Rectangle 10.png")} alt="" />
            {/* <img src={require("../imges/Rectangle 11.png")} alt="" /> */}
            <div className="typeofservice">
              <h5>
                Hardwood, Engineered Hardwood, Laminate & Vinyl Flooring For
                Sale In Toronto
              </h5>
              <p>
                Along with great quality flooring supplies from top brands, we
                at Azazma Company Floors offer great flooring sales and deals.
                For the best selection of hardwood, laminate, vinyl and
                engineered hardwood flooring at the best prices, it doesn’t get
                any better than Azazma Company Floors
              </p>
            </div>
          </div>
          <h1>
            Recent <span>Installations</span>
          </h1>
          <div className="mywork">
            <div className="works">
              <img src={require("../imges/m1.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m2.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m3.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m4.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m5.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m6.png")} alt="" />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
          </div>
          <Link to="/Installation">
            <button>View all</button>
          </Link>
        </div>
      </>
    );
}

export default Home


// const User = sequelize.define('User',);
// const Profile = sequelize.define('Profile',);

// User.hasOne(Profile); // كل مستخدم لديه ملف تعريف واحد
// Profile.belongsTo(User); // كل ملف تعريف ينتمي إلى مستخدم واحد