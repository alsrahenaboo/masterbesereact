import CardHome from "../componant/sherdcom.js/CardHome";





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
          <h1>Why Choose Azazma Floors?</h1>
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
              title={"Hardwood Flooring"}
            />

            <CardHome
              url={require("../imges/Group 33.png")}
              title={"Vinyl  Flooring "}
            />

            <CardHome
              url={require("../imges/3a.png")}
              title={"Laminate  Flooring "}
            />

            <CardHome
              url={require("../imges/4a.png")}
              title={"Carpet Flooring"}
            />

            <CardHome
              url={require("../imges/5a.png")}
              title={"Tiles  Flooring "}
            />
          </div>
          <div className="imgandtext">
            <img src={require("../imges/Rectangle 9.png")} />
            <img src={require("../imges/Rectangle 10.png")} />
            <img src={require("../imges/Rectangle 11.png")} />
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
              <img src={require("../imges/m1.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m2.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m3.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m4.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m5.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
            <div className="works">
              <img src={require("../imges/m6.png")} />
              <p>Vinyl Flooring Installation in North York</p>
            </div>
          </div>
          <button>View all</button>
        </div>
      </>
    );
}

export default Home